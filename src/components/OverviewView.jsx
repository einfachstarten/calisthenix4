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

      <nav className="flex flex-wrap gap-2">
        {weekSummaries.map((week) => (
          <button
            key={week.key}
            type="button"
            onClick={() => onSelectWeek(week.key)}
            className={`flex-1 min-w-[130px] rounded-full border px-4 py-2 text-sm transition ${
              week.key === currentWeek
                ? 'border-brand-400 bg-brand-500/20 text-brand-50 shadow-soft'
                : week.status === 'complete'
                  ? 'border-brand-400/70 bg-brand-500/10 text-brand-100'
                  : 'border-white/10 bg-slate-900/60 text-slate-300'
            }`}
          >
            Woche {week.index + 1}
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
                    className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                      completed
                        ? 'border-brand-400 bg-brand-500/15 text-white'
                        : isRestDay
                          ? 'border-dashed border-brand-300/60 bg-brand-500/10 text-brand-100'
                          : 'border-white/10 bg-slate-900/60 text-slate-200 hover:border-brand-400/40'
                    }`}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/40 text-sm font-semibold text-brand-200">
                      {dayNumber}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.3em] text-brand-300">{day.title}</p>
                      {day.subtitle ? (
                        <p className="text-sm text-slate-300">{day.subtitle}</p>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      {completed ? (
                        <span className="inline-flex items-center gap-1 text-brand-50">
                          <CheckCircle2 className="h-4 w-4" /> Fertig
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-300">
                          <Circle className="h-4 w-4" /> Offen
                        </span>
                      )}
                      <ChevronRight className="h-5 w-5 text-brand-200" />
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
