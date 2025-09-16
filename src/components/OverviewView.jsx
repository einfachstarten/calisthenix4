import { ChevronRight, CheckCircle2, Circle } from 'lucide-react'

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
}) {
  const currentSummary = weekSummaries.find((week) => week.key === currentWeek)

  return (
    <section className="space-y-6 p-4 pb-28 sm:p-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-300">
          Vier Wochen Calisthenics
        </p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          {currentSummary?.title ?? 'Programm'}
        </h1>
        {currentSummary?.quote ? (
          <p className="text-base text-slate-300">„{currentSummary.quote}“</p>
        ) : null}
      </header>

      <nav className="flex flex-wrap gap-3">
        {weekSummaries.map((week) => (
          <button
            key={week.key}
            type="button"
            onClick={() => onSelectWeek(week.key)}
            className={`group relative flex-1 min-w-[140px] rounded-2xl border backdrop-blur-sm px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              week.key === currentWeek
                ? 'border-brand-400/50 bg-gradient-card text-brand-50 shadow-card-hover animate-pulse-glow'
                : week.status === 'complete'
                  ? 'border-success-400/50 bg-gradient-to-br from-success-500/10 to-success-600/10 text-success-100 hover:shadow-glow'
                  : 'border-white/10 bg-slate-900/40 text-slate-300 hover:border-brand-400/30 hover:bg-slate-900/60'
            }`}
          >
            <div className="relative z-10">Woche {week.index + 1}</div>
            {week.key === currentWeek ? (
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-10" />
            ) : null}
          </button>
        ))}
      </nav>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-white">Tagesübersicht</h2>
        {dayKeys.length === 0 ? (
          <p className="rounded-xl border border-dashed border-white/10 bg-slate-900/50 p-4 text-slate-300">
            Inhalte für diese Woche folgen in der nächsten Phase.
          </p>
        ) : (
          <ul className="grid gap-3">
            {dayKeys.map((dayKey) => {
              const day = weekData?.[dayKey]
              if (!day) return null
              const dayNumber = Number.parseInt(dayKey.replace('day', ''), 10)
              const workoutKey = `${currentWeek}-${dayKey}`
              const completed = completedWorkouts.has(workoutKey)
              const isRestDay = Boolean(day.isRestDay)

              return (
                <li key={dayKey}>
                  <button
                    type="button"
                    onClick={() => onSelectDay(dayKey)}
                    className={`group flex w-full items-center gap-4 rounded-3xl border backdrop-blur-sm px-5 py-4 text-left transition-all duration-300 hover:scale-[1.02] ${
                      completed
                        ? 'border-success-400/50 bg-gradient-to-br from-success-500/15 to-success-600/10 text-white shadow-card hover:shadow-glow'
                        : isRestDay
                          ? 'border-dashed border-brand-300/60 bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-100'
                          : 'border-white/10 bg-slate-900/40 text-slate-200 hover:border-brand-400/40 hover:bg-gradient-card hover:shadow-card-hover'
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                        completed
                          ? 'bg-success-500/30 text-success-100 shadow-glow'
                          : isRestDay
                            ? 'bg-brand-500/30 text-brand-200'
                            : 'bg-slate-800/60 text-brand-200 group-hover:bg-brand-500/30'
                      }`}
                    >
                      {dayNumber}
                    </span>
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
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}

export default OverviewView
