import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronRight, CheckCircle2, Circle } from 'lucide-react'
import { SkeletonCard } from './LoadingStates'
import { cardVariants, containerVariants } from '../utils/animations'

/**
 * Übersicht über Wochen und Tagesworkouts.
 * @param {object} props
 * @param {string} props.currentWeek - Aktuell ausgewählte Woche.
 * @param {{ key: string, index: number, title?: string, quote?: string, status: 'complete'|'current'|'upcoming' }[]} props.weekSummaries - Zusammenfassung aller Wochen.
 * @param {Record<string, any>} props.weekData - Daten der aktuellen Woche.
 * @param {string[]} props.dayKeys - Sortierte Day-Keys der aktuellen Woche.
 * @param {(week: string) => void} props.onSelectWeek - Handler zum Umschalten der Woche.
 * @param {(dayKey: string) => void} props.onSelectDay - Öffnet eine Trainingseinheit.
 * @param {Set<string>} props.completedWorkouts - Abgeschlossene Workouts.
 */
function OverviewView({
  currentWeek,
  weekSummaries,
  weekData,
  dayKeys,
  onSelectWeek,
  onSelectDay,
  completedWorkouts,
  isLoading = false,
}) {
  const currentSummary = weekSummaries.find((week) => week.key === currentWeek)
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      className="space-y-6 p-4 pb-28 sm:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="space-y-3" variants={cardVariants}>
        <motion.p
          className="text-sm uppercase tracking-[0.35em] text-brand-300"
          animate={reduceMotion ? {} : { opacity: [0.7, 1, 0.7], transition: { duration: 3, repeat: Infinity } }}
        >
          Vier Wochen Calisthenics
        </motion.p>
        <motion.h1 className="text-3xl font-bold text-white sm:text-4xl" variants={cardVariants}>
          {currentSummary?.title ?? 'Programm'}
        </motion.h1>
        {currentSummary?.quote ? (
          <motion.p className="text-base text-slate-300" variants={cardVariants}>
            „{currentSummary.quote}“
          </motion.p>
        ) : null}
      </motion.header>

      <motion.nav className="flex flex-wrap gap-3" variants={containerVariants}>
        {weekSummaries.map((week) => (
          <motion.button
            key={week.key}
            type="button"
            onClick={() => onSelectWeek(week.key)}
            variants={cardVariants}
            whileHover={{ scale: reduceMotion ? 1 : 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`group relative flex-1 min-w-[140px] rounded-2xl border backdrop-blur-sm px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              week.key === currentWeek
                ? 'border-brand-400/50 bg-gradient-card text-brand-50 shadow-card-hover'
                : week.status === 'complete'
                  ? 'border-success-400/50 bg-gradient-to-br from-success-500/10 to-success-600/10 text-success-100 hover:shadow-glow'
                  : 'border-white/10 bg-slate-900/40 text-slate-300 hover:border-brand-400/30 hover:bg-slate-900/60'
            }`}
          >
            <div className="relative z-10">Woche {week.index + 1}</div>
            {week.key === currentWeek ? (
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-15"
                animate={
                  reduceMotion
                    ? {}
                    : {
                        opacity: [0.1, 0.2, 0.1],
                        transition: { duration: 2.8, repeat: Infinity },
                      }
                }
              />
            ) : null}
          </motion.button>
        ))}
      </motion.nav>

      <motion.div className="space-y-3" variants={cardVariants}>
        <motion.h2 className="text-lg font-semibold text-white" variants={cardVariants}>
          Tagesübersicht
        </motion.h2>
        {isLoading ? (
          <motion.div className="grid gap-3" variants={containerVariants}>
            {[0, 1, 2].map((item) => (
              <motion.div key={item} variants={cardVariants}>
                <SkeletonCard />
              </motion.div>
            ))}
          </motion.div>
        ) : dayKeys.length === 0 ? (
          <motion.p className="rounded-xl border border-dashed border-white/10 bg-slate-900/50 p-4 text-slate-300" variants={cardVariants}>
            Inhalte für diese Woche folgen in der nächsten Phase.
          </motion.p>
        ) : (
          <motion.ul className="grid gap-3" variants={containerVariants} initial="hidden" animate="visible">
            <AnimatePresence>
              {dayKeys.map((dayKey) => {
                const day = weekData?.[dayKey]
                if (!day) return null
                const dayNumber = Number.parseInt(dayKey.replace('day', ''), 10)
                const workoutKey = `${currentWeek}-${dayKey}`
                const completed = completedWorkouts.has(workoutKey)
                const isRestDay = Boolean(day.isRestDay)

                return (
                  <motion.li key={dayKey} variants={cardVariants} layout>
                    <motion.button
                      type="button"
                      onClick={() => onSelectDay(dayKey)}
                      whileHover={{ scale: reduceMotion ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group flex w-full items-center gap-4 rounded-3xl border backdrop-blur-sm px-5 py-4 text-left transition-all duration-300 ${
                        completed
                          ? 'border-success-400/50 bg-gradient-to-br from-success-500/15 to-success-600/10 text-white shadow-card'
                          : isRestDay
                            ? 'border-dashed border-brand-300/60 bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-100'
                            : 'border-white/10 bg-slate-900/40 text-slate-200 hover:border-brand-400/40 hover:bg-gradient-card hover:shadow-card-hover'
                      }`}
                    >
                      <motion.span
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                          completed
                            ? 'bg-success-500/30 text-success-100 shadow-glow'
                            : isRestDay
                              ? 'bg-brand-500/30 text-brand-200'
                              : 'bg-slate-800/60 text-brand-200 group-hover:bg-brand-500/30'
                        }`}
                        animate={
                          completed && !reduceMotion
                            ? { scale: [1, 1.15, 1], transition: { duration: 0.4 } }
                            : {}
                        }
                      >
                        {dayNumber}
                      </motion.span>
                      <div className="flex-1">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">
                          {day.title}
                        </p>
                        {day.subtitle ? (
                          <p className="text-sm leading-relaxed text-slate-300">{day.subtitle}</p>
                        ) : null}
                      </div>
                      <div className="flex items-center gap-3 text-sm font-semibold">
                        {completed ? (
                          <span className="inline-flex items-center gap-2 text-success-200">
                            <CheckCircle2 className="h-5 w-5" /> Fertig
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-slate-300 group-hover:text-brand-200">
                            <Circle className="h-5 w-5" /> Offen
                          </span>
                        )}
                        <ChevronRight className="h-5 w-5 text-brand-300 transition-transform group-hover:translate-x-1" />
                      </div>
                    </motion.button>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </motion.ul>
        )}
      </motion.div>
    </motion.section>
  )
}

export default OverviewView
