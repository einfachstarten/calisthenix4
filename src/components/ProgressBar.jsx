import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'
import { cardVariants, containerVariants, progressVariants, pulseVariants } from '../utils/animations'

function ProgressBar({ session, weekDays, weeks }) {
  const sessionProgress = session.total > 0 ? session.completed / session.total : 0
  const reduceMotion = useReducedMotion()
  const celebrationAnimation = reduceMotion
    ? {}
    : {
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        transition: { duration: 0.6, ease: 'easeInOut' },
      }

  return (
    <motion.div
      className="space-y-5 rounded-3xl border border-white/10 bg-gradient-card p-6 text-slate-100 shadow-card backdrop-blur-sm"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={cardVariants} custom={0}>
        <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-300">
          <span>Session Progress</span>
          <motion.span
            className="text-brand-200"
            key={`${session.completed}-${session.total}`}
            initial={{ scale: 1.15, color: '#22c55e' }}
            animate={{ scale: 1, color: '#7dd3fc' }}
            transition={{ duration: 0.35 }}
          >
            {session.completed}/{session.total}
          </motion.span>
        </div>
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-800/60">
          <motion.div
            className="h-full rounded-full bg-gradient-brand shadow-glow"
            variants={progressVariants}
            initial="initial"
            animate="animate"
            style={{ width: `${Math.min(1, sessionProgress) * 100}%` }}
          />
          {!reduceMotion ? (
            <motion.div
              className="absolute inset-y-0 w-8 bg-gradient-to-l from-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0],
                transition: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              }}
              style={{ left: `${Math.min(1, sessionProgress) * 100}%` }}
            />
          ) : null}
        </div>
      </motion.div>

      <motion.div variants={cardVariants} custom={1}>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-slate-400">Woche</p>
        <motion.div
          className="flex items-center gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {weekDays.map((day, index) => (
            <motion.div
              key={day.label}
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.08, y: -2 }}
              className={`flex h-11 w-11 flex-col items-center justify-center rounded-2xl border text-xs font-bold transition-all duration-300 ${
                day.isRest
                  ? 'border-dashed border-brand-400/50 bg-brand-500/10 text-brand-300'
                  : day.completed
                    ? 'border-success-400 bg-gradient-success text-white shadow-glow'
                    : 'border-white/20 bg-slate-800/50 text-slate-400 hover:border-brand-400/50'
              }`}
            >
              <motion.span
                animate={
                  day.completed && !reduceMotion
                    ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5, delay: index * 0.1 },
                      }
                    : {}
                }
              >
                {day.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={cardVariants} custom={2}>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-slate-400">Gesamt</p>
        <motion.div
          className="flex items-center gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {weeks.map((week, index) => (
            <motion.div
              key={week.label}
              className="flex flex-col items-center gap-2 text-xs"
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 font-bold transition-all duration-300 ${
                  week.status === 'complete'
                    ? 'border-success-400 bg-gradient-success text-white shadow-glow'
                    : week.status === 'current'
                      ? 'border-brand-400 bg-gradient-brand text-white shadow-glow'
                      : 'border-white/20 bg-slate-800/40 text-slate-500'
                }`}
                animate={week.status === 'complete' ? pulseVariants.animate : {}}
              >
                <motion.div
                  animate={
                    week.status === 'complete'
                      ? celebrationAnimation
                      : week.status === 'current' && !reduceMotion
                        ? {
                            scale: [1, 1.1, 1],
                            transition: { duration: 0.8, repeat: Infinity },
                          }
                        : {}
                  }
                >
                  {week.status === 'complete' ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    <Circle className="h-6 w-6" />
                  )}
                </motion.div>
              </motion.div>
              <motion.span
                className="font-semibold"
                animate={{ color: week.status === 'complete' ? '#22c55e' : '#94a3b8' }}
              >
                {week.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProgressBar
