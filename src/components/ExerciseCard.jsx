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
      className={`group rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] ${
        isCompleted
          ? 'border-success-400/50 bg-gradient-to-br from-success-500/15 to-success-600/10 shadow-card animate-fadeIn'
          : 'border-white/10 bg-slate-900/40 hover:border-brand-400/40 hover:bg-gradient-card hover:shadow-card-hover'
      }`}
    >
      <div className="flex gap-4 p-5">
        <label className="relative inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={onToggle}
            className="peer h-7 w-7 appearance-none rounded-full border-2 border-white/30 transition-all duration-300 checked:border-success-400 checked:bg-gradient-success checked:shadow-glow"
            aria-label={`${exercise.name} abhaken`}
          />
          <span className="pointer-events-none absolute inset-0 hidden items-center justify-center text-sm font-bold text-white peer-checked:flex">
            ✓
          </span>
        </label>

        <div className="flex-1">
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            className="flex w-full items-center justify-between gap-4 text-left"
            aria-expanded={expanded}
          >
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-300">{phaseLabel}</p>
              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-brand-100">
                {exercise.name}
              </h3>
              <p className="text-sm font-medium text-slate-400">{detailText}</p>
            </div>
            <ChevronDown
              className={`h-6 w-6 shrink-0 text-brand-300 transition-all duration-300 group-hover:text-brand-200 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expanded ? (
            <div className="mt-4 space-y-4 text-sm text-slate-200 animate-slideUp">
              <p className="leading-relaxed">{exercise.description}</p>
              <div className="flex flex-wrap gap-3">
                {hasDuration ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-glow"
                    onClick={() => onStartTimer(exercise.duration, `${exercise.name} · Übung`)}
                  >
                    <TimerIcon className="h-4 w-4" /> Übungstimer
                  </button>
                ) : null}
                {hasRest ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-800/80 px-4 py-2 font-semibold text-slate-100 transition-all duration-300 hover:border-brand-400/50 hover:bg-slate-700/80"
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
