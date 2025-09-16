import { memo } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'

/**
 * Großer Countdown-Timer mit Steuerungselementen.
 * @param {object} props
 * @param {number} props.timeLeft - Verbleibende Sekunden.
 * @param {number} props.totalDuration - Ursprüngliche Dauer in Sekunden.
 * @param {boolean} props.isRunning - Ob der Timer aktuell läuft.
 * @param {boolean} props.visible - Steuert, ob der Timer angezeigt wird.
 * @param {() => void} props.onPause - Pausiert den Timer.
 * @param {() => void} props.onResume - Startet den Timer erneut.
 * @param {() => void} props.onReset - Setzt den Timer zurück.
 * @param {string} [props.label] - Optionaler Titel des aktiven Intervalls.
 */
function Timer({
  timeLeft,
  totalDuration,
  isRunning,
  visible,
  onPause,
  onResume,
  onReset,
  label,
}) {
  if (!visible) return null

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0')
  const seconds = Math.floor(timeLeft % 60)
    .toString()
    .padStart(2, '0')
  const progress = totalDuration
    ? Math.min(1, Math.max(0, 1 - timeLeft / totalDuration))
    : 0

  return (
    <div className="fixed inset-x-0 bottom-6 z-30 mx-auto w-[min(90%,32rem)] rounded-3xl border border-brand-400/30 bg-gradient-card p-6 shadow-card-hover backdrop-blur-xl animate-slideUp">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          {label ? (
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-300">{label}</p>
          ) : null}
          <p className="font-mono text-6xl font-bold text-white drop-shadow-lg">
            {minutes}:{seconds}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={isRunning ? onPause : onResume}
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow transition-all duration-300 hover:scale-110 hover:shadow-glow-accent active:scale-95"
            aria-label={isRunning ? 'Timer pausieren' : 'Timer starten'}
          >
            {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-slate-800/60 text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/50 hover:bg-slate-700/60"
            aria-label="Timer zurücksetzen"
          >
            <RotateCcw className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800/60">
        <div
          className="h-full rounded-full bg-gradient-brand shadow-glow transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
          aria-hidden
        />
      </div>
    </div>
  )
}

export default memo(Timer)
