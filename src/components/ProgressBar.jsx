import { memo } from 'react'
import { CheckCircle2, Circle } from 'lucide-react'

/**
 * Fortschrittsanzeigen für Einheit, Woche und Gesamtprogramm.
 * @param {object} props
 * @param {{completed: number, total: number}} props.session - Fortschritt der aktuellen Trainingseinheit.
 * @param {{label: string, completed: boolean, isRest?: boolean}[]} props.weekDays - Status der Tage innerhalb der Woche.
 * @param {{label: string, status: 'complete' | 'current' | 'upcoming'}[]} props.weeks - Überblick über die vier Programmwochen.
 */
function ProgressBar({ session, weekDays, weeks }) {
  const sessionProgress = session.total > 0 ? session.completed / session.total : 0

  return (
    <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-100">
      <div>
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span>Session</span>
          <span>
            {session.completed}/{session.total}
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-brand-400 transition-all"
            style={{ width: `${Math.min(1, sessionProgress) * 100}%` }}
          />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Woche</p>
        <div className="flex items-center gap-3">
          {weekDays.map((day) => (
            <div
              key={day.label}
              className={`flex h-9 w-9 flex-col items-center justify-center rounded-full border text-xs ${
                day.isRest
                  ? 'border-dashed border-brand-400/50 text-brand-300'
                  : day.completed
                    ? 'border-brand-400 bg-brand-500/20 text-white'
                    : 'border-white/10 bg-slate-900/50 text-slate-400'
              }`}
            >
              <span>{day.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Gesamt</p>
        <div className="flex items-center gap-4">
          {weeks.map((week) => (
            <div key={week.label} className="flex flex-col items-center gap-1 text-xs">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  week.status === 'complete'
                    ? 'border-brand-400 bg-brand-500/30 text-white'
                    : week.status === 'current'
                      ? 'border-brand-300 bg-brand-500/10 text-brand-100'
                      : 'border-white/10 bg-slate-900/50 text-slate-500'
                }`}
              >
                {week.status === 'complete' ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
              </div>
              <span>{week.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(ProgressBar)
