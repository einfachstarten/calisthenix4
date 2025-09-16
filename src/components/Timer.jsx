import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Pause, Play, RotateCcw } from 'lucide-react'
import { memo, useEffect, useMemo, useState } from 'react'
import { cardVariants, containerVariants, slideVariants } from '../utils/animations'

function Timer({
  isVisible,
  timeLeft,
  totalTime,
  isRunning,
  label,
  onPause,
  onResume,
  onReset,
}) {
  const [progress, setProgress] = useState(0)
  const [isFinishing, setIsFinishing] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (totalTime > 0) {
      const ratio = (totalTime - timeLeft) / totalTime
      setProgress(Math.min(1, Math.max(0, ratio)))
    } else {
      setProgress(0)
    }
    setIsFinishing(timeLeft > 0 && timeLeft <= 5)
  }, [timeLeft, totalTime])

  const minutes = useMemo(() => Math.floor(timeLeft / 60).toString().padStart(2, '0'), [timeLeft])
  const seconds = useMemo(() => Math.floor(timeLeft % 60).toString().padStart(2, '0'), [timeLeft])
  const circumference = 2 * Math.PI * 45

  const cardPulse = reduceMotion
    ? {}
    : {
        scale: [1, 1.02, 1],
        transition: { duration: 0.5, repeat: Infinity },
      }
  const timerPulse = reduceMotion
    ? {}
    : {
        scale: [1, 1.1, 1],
        color: ['#fb7185', '#f97316', '#fb7185'],
        transition: { duration: 1, repeat: Infinity },
      }
  const labelGlow = reduceMotion
    ? {}
    : {
        opacity: [0.7, 1, 0.7],
        transition: { duration: 2, repeat: Infinity },
      }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="timer"
          variants={slideVariants.up}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-x-0 bottom-6 z-30 mx-auto w-[min(90%,32rem)]"
        >
          <motion.div
            className="rounded-3xl border border-brand-400/30 bg-gradient-card p-6 shadow-card-hover backdrop-blur-xl"
            animate={isFinishing ? cardPulse : {}}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                {label ? (
                  <motion.p
                    className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-300"
                    animate={labelGlow}
                  >
                    {label}
                  </motion.p>
                ) : null}

                <div className="relative inline-block">
                  <motion.p
                    className={`font-mono text-6xl font-bold drop-shadow-lg transition-colors duration-300 ${
                      isFinishing ? 'text-orange-400' : 'text-white'
                    }`}
                    animate={isFinishing ? timerPulse : {}}
                  >
                    {minutes}:{seconds}
                  </motion.p>

                  <svg
                    className="absolute -inset-4 h-full w-full -rotate-90"
                    style={{ filter: 'drop-shadow(0 0 12px rgba(14, 165, 233, 0.35))' }}
                    aria-hidden
                  >
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45"
                      stroke="rgba(255, 255, 255, 0.12)"
                      strokeWidth="3"
                      fill="none"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45"
                      stroke="url(#timerGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                      animate={{
                        strokeDashoffset: circumference - progress * circumference,
                        stroke: isFinishing ? '#f97316' : '#0ea5e9',
                      }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                    />
                    <defs>
                      <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#d946ef" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <motion.div
                className="flex items-center gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  variants={cardVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  type="button"
                  onClick={isRunning ? onPause : onResume}
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow transition-all duration-300"
                  aria-label={isRunning ? 'Timer pausieren' : 'Timer starten'}
                >
                  <motion.div
                    animate={{ rotate: isRunning ? 0 : 90 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </motion.div>
                </motion.button>

                <motion.button
                  variants={cardVariants}
                  whileHover={{ scale: 1.1, rotate: -90 }}
                  whileTap={{ scale: 0.92 }}
                  type="button"
                  onClick={onReset}
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-slate-800/60 text-white/90 transition-all duration-300 hover:border-brand-400/50 hover:bg-slate-700/60"
                  aria-label="Timer zurücksetzen"
                >
                  <RotateCcw className="h-6 w-6" />
                </motion.button>
              </motion.div>
            </div>

            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800/60">
              <motion.div
                className={`h-full rounded-full shadow-glow transition-colors duration-300 ${
                  isFinishing ? 'bg-gradient-to-r from-orange-400 to-red-500' : 'bg-gradient-brand'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress }}
                style={{ transformOrigin: 'left' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default memo(Timer)
