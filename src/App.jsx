import { useCallback, useEffect, useMemo, useState } from 'react'
import OverviewView from './components/OverviewView'
import WorkoutView from './components/WorkoutView'
import Timer from './components/Timer'
import workoutProgram from './data/workoutProgram'
import { useLocalStorage } from './hooks/useLocalStorage'
import { playBeep } from './utils/audio'

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

  const [currentView, setCurrentView] = useState('overview')
  const [selectedDay, setSelectedDay] = useState(null)

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
  const [timerDuration, setTimerDuration] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timerLabel, setTimerLabel] = useState('')

  useEffect(() => {
    if (!workoutProgram[currentWeek]) {
      setCurrentWeek(weekKeys[0] ?? 'week1')
    }
  }, [currentWeek, setCurrentWeek, weekKeys])

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
    if (!isRunning && timeLeft === 0 && timerDuration !== 0) {
      setTimerDuration(0)
      setTimerLabel('')
    }
  }, [isRunning, timeLeft, timerDuration])

  const startTimer = useCallback((duration, label) => {
    if (typeof duration !== 'number' || Number.isNaN(duration) || duration <= 0) return
    setIsRunning(false)
    setTimeLeft(duration)
    setTimerDuration(duration)
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
    setTimerDuration(0)
    setTimerLabel('')
  }, [])

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
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        aria-hidden
      />

      {currentView === 'workout' && selectedDay && currentDayData ? (
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
      ) : (
        <OverviewView
          currentWeek={currentWeek}
          weekSummaries={weekSummaries}
          weekData={currentWeekData}
          dayKeys={currentDayKeys}
          onSelectWeek={handleSelectWeek}
          onSelectDay={handleSelectDay}
          completedWorkouts={completedWorkouts}
        />
      )}

      <Timer
        timeLeft={timeLeft}
        totalDuration={timerDuration}
        isRunning={isRunning}
        visible={timerVisible}
        onPause={pauseTimer}
        onResume={resumeTimer}
        onReset={resetTimer}
        label={timerLabel}
      />
    </main>
  )
}

export default App
