import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import OfflineBanner from './components/OfflineBanner'
import OverviewView from './components/OverviewView'
import PWAInstallPrompt from './components/PWAInstallPrompt'
import Timer from './components/Timer'
import WorkoutView from './components/WorkoutView'
import { LoadingScreen } from './components/LoadingStates'
import workoutProgram from './data/workoutProgram'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useNotifications } from './hooks/useNotifications'
import { useWakeLock } from './hooks/useWakeLock'
import { useRouter } from './hooks/useRouter'
import { playBeep } from './utils/audio'
import { floatVariants, pageVariants } from './utils/animations'
import { getViewFromPath } from './utils/routeHelpers'

const phases = ['warmup', 'main', 'cooldown']

const serializeSet = (value) => JSON.stringify(Array.from(value instanceof Set ? value : []))
const deserializeSet = (value) => {
  try {
    const parsed = JSON.parse(value)
    return new Set(Array.isArray(parsed) ? parsed : [])
  } catch (error) {
    console.warn('[App] Konnte Set nicht laden:', error)
    return new Set()
  }
}

function App() {
  const weekKeys = useMemo(() => Object.keys(workoutProgram), [])
  const { currentPath } = useRouter()
  const previousPathRef = useRef(null)

  const [currentView, setCurrentView] = useState('overview')
  const [selectedDay, setSelectedDay] = useState(null)
  const [isAppReady, setIsAppReady] = useState(false)

  const [currentWeek, setCurrentWeek] = useLocalStorage('current-week', weekKeys[0] ?? 'week1')
  const [completedWorkouts, setCompletedWorkouts] = useLocalStorage(
    'completed-workouts',
    () => new Set(),
    { serialize: serializeSet, deserialize: deserializeSet },
  )
  const [completedExercises, setCompletedExercises] = useLocalStorage(
    'completed-exercises',
    () => new Set(),
    { serialize: serializeSet, deserialize: deserializeSet },
  )

  const [timeLeft, setTimeLeft] = useState(0)
  const [timerTotal, setTimerTotal] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timerLabel, setTimerLabel] = useState('')

  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -120])

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsAppReady(true)
      return undefined
    }
    const timeout = window.setTimeout(() => setIsAppReady(true), 450)
    return () => window.clearTimeout(timeout)
  }, [])

  const {
    isSupported: notificationsSupported,
    permission,
    requestPermission,
    scheduleWorkoutReminder,
  } = useNotifications()
  const { isActive: wakeLockActive, requestWakeLock, releaseWakeLock } = useWakeLock()

  useEffect(() => {
    if (!workoutProgram[currentWeek]) {
      setCurrentWeek(weekKeys[0] ?? 'week1')
    }
  }, [currentWeek, setCurrentWeek, weekKeys])

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return undefined

    const registerServiceWorker = () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.info('[App] Service Worker registriert:', registration.scope)
        })
        .catch((error) => {
          console.error('[App] Service Worker Registrierung fehlgeschlagen:', error)
        })
    }

    if (document.readyState === 'complete') {
      registerServiceWorker()
    } else {
      window.addEventListener('load', registerServiceWorker)
    }

    return () => {
      window.removeEventListener('load', registerServiceWorker)
    }
  }, [])

  const getDayKeys = useCallback((weekKey) => {
    const weekData = workoutProgram[weekKey]
    if (!weekData) return []
    return Object.keys(weekData)
      .filter((key) => key.startsWith('day'))
      .sort((a, b) => Number.parseInt(a.replace('day', ''), 10) - Number.parseInt(b.replace('day', ''), 10))
  }, [])

  const getExerciseKeys = useCallback((weekKey, dayKey) => {
    const dayData = workoutProgram[weekKey]?.[dayKey]
    if (!dayData) return []
    const keys = []
    phases.forEach((phase) => {
      const exercises = Array.isArray(dayData[phase]) ? dayData[phase] : []
      exercises.forEach((_, index) => {
        keys.push(`${weekKey}-${dayKey}-${phase}-${index}`)
      })
    })
    return keys
  }, [])

  const toggleExerciseComplete = useCallback(
    (weekKey, dayKey, phase, index) => {
      const exerciseKey = `${weekKey}-${dayKey}-${phase}-${index}`
      setCompletedExercises((prev) => {
        const updated = new Set(prev)
        if (updated.has(exerciseKey)) {
          updated.delete(exerciseKey)
        } else {
          updated.add(exerciseKey)
        }

        setCompletedWorkouts((prevWorkouts) => {
          const workoutKey = `${weekKey}-${dayKey}`
          const exerciseKeys = getExerciseKeys(weekKey, dayKey)
          const allCompleted =
            exerciseKeys.length > 0 && exerciseKeys.every((key) => updated.has(key))
          const next = new Set(prevWorkouts)
          if (allCompleted) {
            next.add(workoutKey)
          } else {
            next.delete(workoutKey)
          }
          return next
        })

        return updated
      })
    },
    [getExerciseKeys, setCompletedExercises, setCompletedWorkouts],
  )

  const toggleWorkoutComplete = useCallback(
    (weekKey, dayKey) => {
      const workoutKey = `${weekKey}-${dayKey}`
      const exerciseKeys = getExerciseKeys(weekKey, dayKey)

      if (exerciseKeys.length === 0) {
        setCompletedWorkouts((prev) => {
          const next = new Set(prev)
          if (next.has(workoutKey)) {
            next.delete(workoutKey)
          } else {
            next.add(workoutKey)
          }
          return next
        })
        return
      }

      setCompletedExercises((prev) => {
        const updated = new Set(prev)
        const alreadyComplete = exerciseKeys.every((key) => updated.has(key))

        if (alreadyComplete) {
          exerciseKeys.forEach((key) => updated.delete(key))
          setCompletedWorkouts((prevWorkouts) => {
            const next = new Set(prevWorkouts)
            next.delete(workoutKey)
            return next
          })
        } else {
          exerciseKeys.forEach((key) => updated.add(key))
          setCompletedWorkouts((prevWorkouts) => {
            const next = new Set(prevWorkouts)
            next.add(workoutKey)
            return next
          })
        }

        return updated
      })
    },
    [getExerciseKeys, setCompletedExercises, setCompletedWorkouts],
  )

  useEffect(() => {
    if (!isRunning) return
    if (timeLeft <= 0) {
      setIsRunning(false)
      return
    }

    const interval = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval)
          setIsRunning(false)
          playBeep()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => window.clearInterval(interval)
  }, [isRunning, timeLeft])

  useEffect(() => {
    if (!notificationsSupported || permission !== 'granted') return undefined

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(9, 0, 0, 0)

    scheduleWorkoutReminder(
      tomorrow.toISOString(),
      'Bereit für dein Calisthenics Training? 💪',
    )
  }, [notificationsSupported, permission, scheduleWorkoutReminder])

  useEffect(() => {
    if (!isRunning && timeLeft === 0 && timerTotal !== 0) {
      setTimerTotal(0)
      setTimerLabel('')
    }
  }, [isRunning, timeLeft, timerTotal])

  const startTimer = useCallback((duration, label) => {
    if (typeof duration !== 'number' || Number.isNaN(duration) || duration <= 0) return
    setIsRunning(false)
    setTimeLeft(duration)
    setTimerTotal(duration)
    setTimerLabel(label)
    setIsRunning(true)
  }, [])

  const pauseTimer = useCallback(() => {
    setIsRunning(false)
  }, [])

  const resumeTimer = useCallback(() => {
    setIsRunning((running) => {
      if (running || timeLeft <= 0) return running
      return true
    })
  }, [timeLeft])

  const resetTimer = useCallback(() => {
    setIsRunning(false)
    setTimeLeft(0)
    setTimerTotal(0)
    setTimerLabel('')
  }, [])

  useEffect(() => {
    if (typeof currentPath !== 'string') return

    const pathChanged = previousPathRef.current !== currentPath
    previousPathRef.current = currentPath

    const routeConfig = getViewFromPath(currentPath, {
      program: workoutProgram,
      currentWeek,
      weekKeys,
    })

    if (routeConfig.selectedWeek && routeConfig.selectedWeek !== currentWeek) {
      setCurrentWeek(routeConfig.selectedWeek)
    }

    if (routeConfig.view === 'workout' && routeConfig.selectedDay) {
      if (routeConfig.selectedDay !== selectedDay) {
        setSelectedDay(routeConfig.selectedDay)
      }
      if (currentView !== 'workout') {
        setCurrentView('workout')
      }
    } else {
      const nextView = routeConfig.view || 'overview'
      if (currentView !== nextView) {
        setCurrentView(nextView)
      }
    }

    if (routeConfig.startTimer && pathChanged) {
      startTimer(60, 'Schneller Timer')
    }
  }, [currentPath, currentView, currentWeek, selectedDay, setCurrentWeek, startTimer, weekKeys])

  const weekSummaries = useMemo(
    () =>
      weekKeys.map((weekKey, index) => {
        const weekData = workoutProgram[weekKey]
        const dayKeys = getDayKeys(weekKey)
        const trainingDays = dayKeys.filter((dayKey) => !weekData?.[dayKey]?.isRestDay)
        const allTrainingCompleted =
          trainingDays.length > 0 &&
          trainingDays.every((dayKey) => completedWorkouts.has(`${weekKey}-${dayKey}`))

        let status = 'upcoming'
        if (allTrainingCompleted) {
          status = 'complete'
        } else if (weekKey === currentWeek) {
          status = 'current'
        }

        return {
          key: weekKey,
          index,
          title: weekData?.title,
          quote: weekData?.quote,
          status,
        }
      }),
    [completedWorkouts, currentWeek, getDayKeys, weekKeys],
  )

  const currentWeekData = useMemo(
    () => workoutProgram[currentWeek] ?? {},
    [currentWeek],
  )
  const currentDayKeys = useMemo(
    () => getDayKeys(currentWeek),
    [currentWeek, getDayKeys],
  )
  const currentDayData = selectedDay ? currentWeekData[selectedDay] : null

  const sessionKeys = useMemo(() => {
    if (!selectedDay) return []
    return getExerciseKeys(currentWeek, selectedDay)
  }, [currentWeek, selectedDay, getExerciseKeys])

  const sessionCompleted = sessionKeys.filter((key) => completedExercises.has(key)).length
  const sessionTotal = sessionKeys.length
  const sessionProgress = { completed: sessionCompleted, total: sessionTotal }

  const weekDayStatus = useMemo(() => {
    const dayKeys = currentDayKeys
    const entries = []
    let restEntry = null
    dayKeys.forEach((dayKey) => {
      const day = currentWeekData[dayKey]
      const workoutKey = `${currentWeek}-${dayKey}`
      const completed = completedWorkouts.has(workoutKey)
      if (day?.isRestDay) {
        restEntry = { label: 'R', completed, isRest: true }
      } else {
        entries.push({ label: `T${entries.length + 1}`, completed, isRest: false })
      }
    })
    return restEntry ? [...entries, restEntry] : entries
  }, [completedWorkouts, currentDayKeys, currentWeek, currentWeekData])

  const totalWeekStatus = useMemo(
    () => weekSummaries.map((week) => ({ label: `W${week.index + 1}`, status: week.status })),
    [weekSummaries],
  )

  const isWorkoutCompleted = Boolean(selectedDay) && completedWorkouts.has(`${currentWeek}-${selectedDay}`)
  const timerVisible = isRunning || timeLeft > 0
  const isWorkoutActive = currentView === 'workout' && selectedDay && !currentDayData?.isRestDay

  useEffect(() => {
    if (!isWorkoutActive) {
      releaseWakeLock()
      return
    }

    requestWakeLock()

    return () => {
      releaseWakeLock()
    }
  }, [isWorkoutActive, releaseWakeLock, requestWakeLock])

  const handleSelectWeek = useCallback(
    (weekKey) => {
      setCurrentWeek(weekKey)
      setCurrentView('overview')
      setSelectedDay(null)
    },
    [setCurrentWeek],
  )

  const handleSelectDay = useCallback((dayKey) => {
    setSelectedDay(dayKey)
    setCurrentView('workout')
  }, [])

  const handleBackToOverview = useCallback(() => {
    setCurrentView('overview')
  }, [])

  const isExerciseCompleted = useCallback(
    (phase, index) => {
      if (!selectedDay) return false
      const key = `${currentWeek}-${selectedDay}-${phase}-${index}`
      return completedExercises.has(key)
    },
    [completedExercises, currentWeek, selectedDay],
  )

  return (
    <main className="relative mx-auto min-h-screen max-w-4xl pb-32">
      <PWAInstallPrompt />
      <OfflineBanner />
      {wakeLockActive && isWorkoutActive ? (
        <div className="fixed bottom-20 right-4 z-30">
          <div className="rounded-full border border-green-400/30 bg-green-500/20 px-3 py-1 text-xs text-green-200 backdrop-blur-sm">
            🔒 Bildschirm aktiv
          </div>
        </div>
      ) : null}

      <motion.div
        className="pointer-events-none fixed inset-0 -z-20"
        aria-hidden
        animate={{
          background:
            currentView === 'workout'
              ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
              : 'linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)',
        }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-main opacity-60"
        aria-hidden
        style={{ y: parallaxY }}
      />
      <motion.div
        className="pointer-events-none fixed -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
        variants={floatVariants}
        animate={reduceMotion ? undefined : 'animate'}
        style={{ y: reduceMotion ? 0 : parallaxY }}
      />
      <motion.div
        className="pointer-events-none fixed -left-32 bottom-10 -z-10 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl"
        aria-hidden
        variants={floatVariants}
        animate={reduceMotion ? undefined : 'animate'}
        style={{ y: reduceMotion ? 0 : parallaxY }}
      />

      <AnimatePresence>{!isAppReady ? <LoadingScreen /> : null}</AnimatePresence>

      {notificationsSupported && permission === 'default' ? (
        <motion.div
          className="fixed inset-x-0 top-4 z-30 mx-auto w-[min(90%,32rem)] p-4"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="rounded-2xl border border-brand-400/30 bg-gradient-card p-4 shadow-card backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-white">Workout-Erinnerungen</h4>
                <p className="text-sm text-slate-300">Bleib motiviert mit täglichen Benachrichtigungen.</p>
              </div>
              <motion.button
                type="button"
                onClick={requestPermission}
                whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-white"
              >
                Aktivieren
              </motion.button>
            </div>
          </div>
        </motion.div>
      ) : null}

      <AnimatePresence mode="wait">
        {currentView === 'workout' && selectedDay && currentDayData ? (
          <motion.div key="workout-view" variants={pageVariants} initial="initial" animate="in" exit="out">
            <WorkoutView
              weekKey={currentWeek}
              dayKey={selectedDay}
              dayData={currentDayData}
              onBack={handleBackToOverview}
              onToggleExercise={(phase, index) => toggleExerciseComplete(currentWeek, selectedDay, phase, index)}
              onToggleWorkoutComplete={() => toggleWorkoutComplete(currentWeek, selectedDay)}
              isExerciseCompleted={isExerciseCompleted}
              sessionProgress={sessionProgress}
              weekDayStatus={weekDayStatus}
              totalWeekStatus={totalWeekStatus}
              onStartTimer={startTimer}
              isWorkoutCompleted={isWorkoutCompleted}
            />
          </motion.div>
        ) : (
          <motion.div key="overview" variants={pageVariants} initial="initial" animate="in" exit="out">
            <OverviewView
              currentWeek={currentWeek}
              weekSummaries={weekSummaries}
              weekData={currentWeekData}
              dayKeys={currentDayKeys}
              onSelectWeek={handleSelectWeek}
              onSelectDay={handleSelectDay}
              completedWorkouts={completedWorkouts}
              isLoading={!isAppReady}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Timer
        isVisible={timerVisible}
        timeLeft={timeLeft}
        totalTime={timerTotal}
        isRunning={isRunning}
        onPause={pauseTimer}
        onResume={resumeTimer}
        onReset={resetTimer}
        label={timerLabel}
      />
    </main>
  )
}

export default App
