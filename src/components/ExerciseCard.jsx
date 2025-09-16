import { useMemo, useState } from 'react'
import { ChevronDown, Timer as TimerIcon, TimerReset } from 'lucide-react'

const phaseLabelMap = {
  warmup: 'Aufwärmen',
  main: 'Hauptteil',
  cooldown: 'Cooldown',
}

/**
 * Accordion-Karte für einzelne Übungen inklusive Checkboxen und Timer-Shortcuts.
 * @param {object} props
 * @param {{ name: string, description: string, duration?: number, reps?: string, rest?: number }} props.exercise
 * @param {'warmup'|'main'|'cooldown'} props.phase - Trainingsphase.
 * @param {number} props.index - Positionsindex innerhalb der Phase.
 * @param {boolean} props.isCompleted - Ob die Übung abgeschlossen ist.
 * @param {() => void} props.onToggle - Handler zum Umschalten des Übungsstatus.
 * @param {(duration: number, label: string) => void} props.onStartTimer - Startet einen Timer für Übungs- oder Pausendauer.
 */
function ExerciseCard({ exercise, phase, index, isCompleted, onToggle, onStartTimer }) {
  const [expanded, setExpanded] = useState(index === 0)
  const phaseLabel = phaseLabelMap[phase] ?? 'Session'

  const hasDuration = typeof exercise.duration === 'number' && exercise.duration > 0
  const hasRest = typeof exercise.rest === 'number' && exercise.rest > 0

  const detailText = useMemo(() => {
    if (exercise.reps) return exercise.reps
    if (hasDuration) return `${formatSeconds(exercise.duration)} · ${phaseLabel}`
    return phaseLabel
  }, [exercise.reps, exercise.duration, hasDuration, phaseLabel])

  return (
    <article
      className={`rounded-2xl border transition-colors ${
        isCompleted
          ? 'border-brand-400 bg-brand-500/10 backdrop-blur'
          : 'border-white/10 bg-slate-900/40'
      }`}
    >
      <div className="flex gap-3 p-4">
        <label className="relative inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={onToggle}
            className="peer h-6 w-6 appearance-none rounded-full border-2 border-white/20 transition-colors checked:border-brand-400 checked:bg-brand-500"
            aria-label={`${exercise.name} abhaken`}
          />
          <span className="pointer-events-none absolute inset-0 hidden items-center justify-center text-xs text-white peer-checked:flex">
            ✓
          </span>
        </label>

        <div className="flex-1">
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className="flex w-full items-center justify-between gap-3 text-left"
            aria-expanded={expanded}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">{phaseLabel}</p>
              <h3 className="text-lg font-semibold text-white">{exercise.name}</h3>
              <p className="text-sm text-slate-300">{detailText}</p>
            </div>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-brand-200 transition-transform ${expanded ? 'rotate-180' : ''}`}
            />
          </button>

          {expanded ? (
            <div className="mt-3 space-y-3 text-sm text-slate-200">
              <p>{exercise.description}</p>
              <div className="flex flex-wrap gap-2">
                {hasDuration ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/20 px-3 py-1 text-brand-50 transition hover:bg-brand-500/30"
                    onClick={() => onStartTimer(exercise.duration, `${exercise.name} · Übung`)}
                  >
                    <TimerIcon className="h-4 w-4" /> Übungstimer
                  </button>
                ) : null}
                {hasRest ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/80 px-3 py-1 text-slate-100 transition hover:bg-slate-700/80"
                    onClick={() => onStartTimer(exercise.rest, `${exercise.name} · Pause`)}
                  >
                    <TimerReset className="h-4 w-4" /> Pausentimer
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

/**
 * Formatiert eine Sekundenangabe zu „MM:SS“.
 * @param {number} totalSeconds
 */
function formatSeconds(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  if (minutes === 0) {
    return `${seconds} Sek.`
  }
  if (seconds === 0) {
    return `${minutes} Min.`
  }
  return `${minutes} Min. ${seconds} Sek.`
}

export default ExerciseCard
