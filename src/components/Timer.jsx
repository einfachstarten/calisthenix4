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
    <div className="fixed inset-x-0 bottom-6 z-30 mx-auto w-[min(90%,28rem)] rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-soft backdrop-blur-lg">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1">
          {label ? (
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
          ) : null}
          <p className="font-mono text-5xl font-semibold text-white">
            {minutes}:{seconds}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={isRunning ? onPause : onResume}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-inner shadow-brand-900 transition-transform hover:scale-105 active:scale-95"
            aria-label={isRunning ? 'Timer pausieren' : 'Timer starten'}
          >
            {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/90 transition hover:bg-white/10"
            aria-label="Timer zurücksetzen"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-brand-400 transition-all"
          style={{ width: `${progress * 100}%` }}
          aria-hidden
        />
      </div>
    </div>
  )
}

export default memo(Timer)
