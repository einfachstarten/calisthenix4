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
    <div className="space-y-5 rounded-3xl border border-white/10 bg-gradient-card p-6 text-slate-100 shadow-card backdrop-blur-sm">
      <div>
        <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-300">
          <span>Session Progress</span>
          <span className="text-brand-200">
            {session.completed}/{session.total}
          </span>
        </div>
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-800/60">
          <div
            className="h-full rounded-full bg-gradient-brand shadow-glow transition-all duration-500 ease-out"
            style={{ width: `${Math.min(1, sessionProgress) * 100}%` }}
          />
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-slate-400">Woche</p>
        <div className="flex items-center gap-3">
          {weekDays.map((day) => (
            <div
              key={day.label}
              className={`flex h-11 w-11 flex-col items-center justify-center rounded-2xl border text-xs font-bold transition-all duration-300 ${
                day.isRest
                  ? 'border-dashed border-brand-400/50 bg-brand-500/10 text-brand-300'
                  : day.completed
                    ? 'border-success-400 bg-gradient-success text-white shadow-glow animate-pulse-glow'
                    : 'border-white/20 bg-slate-800/50 text-slate-400 hover:border-brand-400/50'
              }`}
            >
              <span>{day.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-slate-400">Gesamt</p>
        <div className="flex items-center gap-5">
          {weeks.map((week) => (
            <div key={week.label} className="flex flex-col items-center gap-2 text-xs">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 font-bold transition-all duration-300 ${
                  week.status === 'complete'
                    ? 'border-success-400 bg-gradient-success text-white shadow-glow'
                    : week.status === 'current'
                      ? 'border-brand-400 bg-gradient-brand text-white shadow-glow animate-pulse-glow'
                      : 'border-white/20 bg-slate-800/40 text-slate-500'
                }`}
              >
                {week.status === 'complete' ? (
                  <CheckCircle2 className="h-6 w-6" />
                ) : (
                  <Circle className="h-6 w-6" />
                )}
              </div>
              <span className="font-semibold">{week.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(ProgressBar)
