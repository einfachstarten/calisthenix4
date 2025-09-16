import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { ChevronDown, Timer as TimerIcon, TimerReset } from 'lucide-react'
import { cardVariants, containerVariants, springConfig } from '../utils/animations'

const phaseLabelMap = {
  warmup: 'Aufwärmen',
  main: 'Hauptteil',
  cooldown: 'Cooldown',
}

function ExerciseCard({ exercise, phase, index, isCompleted, onToggle, onStartTimer }) {
  const [expanded, setExpanded] = useState(index === 0)
  const [isHovered, setIsHovered] = useState(false)
  const phaseLabel = phaseLabelMap[phase] ?? 'Session'
  const reduceMotion = useReducedMotion()
  const rippleAnimation = reduceMotion ? {} : { scale: 4, opacity: 0 }
  const hoverTitleAnimation = reduceMotion ? { x: 0 } : { x: 4 }

  const hasDuration = typeof exercise.duration === 'number' && exercise.duration > 0
  const hasRest = typeof exercise.rest === 'number' && exercise.rest > 0

  const detailText = useMemo(() => {
    if (exercise.reps) return exercise.reps
    if (hasDuration) return `${formatSeconds(exercise.duration)} · ${phaseLabel}`
    return phaseLabel
  }, [exercise.reps, exercise.duration, hasDuration, phaseLabel])

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      custom={index}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group rounded-3xl border backdrop-blur-sm transition-colors duration-300 ${
        isCompleted
          ? 'border-success-400/50 bg-gradient-to-br from-success-500/15 to-success-600/10 shadow-card'
          : 'border-white/10 bg-slate-900/40 hover:border-brand-400/40 hover:bg-gradient-card hover:shadow-card-hover'
      }`}
      style={{
        backgroundImage: isCompleted
          ? 'radial-gradient(circle at top right, rgba(34, 197, 94, 0.1), transparent 50%)'
          : undefined,
      }}
    >
      <div className="flex gap-4 p-5">
        <motion.label
          className="relative inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.input
            type="checkbox"
            checked={isCompleted}
            onChange={onToggle}
            className="peer h-7 w-7 appearance-none rounded-full border-2 border-white/30 transition-all duration-300 checked:border-success-400 checked:bg-gradient-success"
            aria-label={`${exercise.name} abhaken`}
          />
          <AnimatePresence>
            {isCompleted ? (
              <motion.span
                key="check"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: 'spring', stiffness: 480, damping: 25 }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-bold text-white"
              >
                ✓
              </motion.span>
            ) : null}
          </AnimatePresence>

          <AnimatePresence>
            {isCompleted ? (
              <motion.div
                key="ripple"
                initial={{ scale: 0, opacity: 0.8 }}
                animate={rippleAnimation}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full bg-success-400"
                style={{ pointerEvents: 'none' }}
              />
            ) : null}
          </AnimatePresence>
        </motion.label>

        <div className="flex-1">
          <motion.button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className="flex w-full items-center justify-between gap-4 text-left"
            whileHover={{ x: 2 }}
            aria-expanded={expanded}
          >
            <motion.div
              className="space-y-1"
              animate={isHovered ? hoverTitleAnimation : { x: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            >
              <motion.p
                className="text-xs font-bold uppercase tracking-[0.3em] text-brand-300"
                animate={{ opacity: isHovered ? 1 : 0.8 }}
              >
                {phaseLabel}
              </motion.p>
              <motion.h3
                className="text-xl font-bold text-white transition-colors group-hover:text-brand-100"
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={springConfig}
              >
                {exercise.name}
              </motion.h3>
              <p className="text-sm font-medium text-slate-400">{detailText}</p>
            </motion.div>

            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              <ChevronDown className="h-6 w-6 shrink-0 text-brand-300 transition-colors group-hover:text-brand-200" />
            </motion.div>
          </motion.button>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -16 }}
                  animate={{ y: 0 }}
                  exit={{ y: -16 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  className="mt-4 space-y-4 text-sm text-slate-200"
                >
                  <p className="leading-relaxed">{exercise.description}</p>
                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {hasDuration ? (
                      <motion.button
                        key="duration"
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 font-semibold text-white shadow-glow transition-all duration-300"
                        onClick={() => onStartTimer(exercise.duration, `${exercise.name} · Übung`)}
                      >
                        <TimerIcon className="h-4 w-4" /> Übungstimer
                      </motion.button>
                    ) : null}
                    {hasRest ? (
                      <motion.button
                        key="rest"
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-800/80 px-4 py-2 font-semibold text-slate-100 transition-all duration-300 hover:border-brand-400/50 hover:bg-slate-700/80"
                        onClick={() => onStartTimer(exercise.rest, `${exercise.name} · Pause`)}
                      >
                        <TimerReset className="h-4 w-4" /> Pausentimer
                      </motion.button>
                    ) : null}
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  )
}

function formatSeconds(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  if (minutes === 0) return `${seconds} Sek.`
  if (seconds === 0) return `${minutes} Min.`
  return `${minutes} Min. ${seconds} Sek.`
}

export default ExerciseCard
