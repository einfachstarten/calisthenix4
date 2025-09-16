import { ArrowLeft, Sparkles } from 'lucide-react'
import ExerciseCard from './ExerciseCard'
import ProgressBar from './ProgressBar'

const phaseOrder = [
  { key: 'warmup', label: 'Aufwärmen' },
  { key: 'main', label: 'Hauptteil' },
  { key: 'cooldown', label: 'Cooldown' },
]

/**
 * Detailansicht einer Trainingseinheit mit allen Übungen und Fortschrittsanzeige.
 * @param {object} props
 * @param {string} props.weekKey - Aktuelle Woche.
 * @param {string} props.dayKey - Aktueller Tag.
 * @param {Record<string, any>} props.dayData - Daten des Tages.
 * @param {() => void} props.onBack - Kehrt zur Übersicht zurück.
 * @param {(phase: 'warmup'|'main'|'cooldown', index: number) => void} props.onToggleExercise - Umschalten einzelner Übungen.
 * @param {() => void} props.onToggleWorkoutComplete - Markiert die Einheit komplett.
 * @param {(phase: 'warmup'|'main'|'cooldown', index: number) => boolean} props.isExerciseCompleted - Prüft, ob eine Übung abgeschlossen ist.
 * @param {{completed: number, total: number}} props.sessionProgress - Daten für die Session-Anzeige.
 * @param {{label: string, completed: boolean, isRest?: boolean}[]} props.weekDayStatus - Status für Wochenpunkte.
 * @param {{label: string, status: 'complete'|'current'|'upcoming'}[]} props.totalWeekStatus - Status für Gesamtprogramm.
 * @param {(duration: number, label: string) => void} props.onStartTimer - Startet Timer.
 * @param {boolean} props.isWorkoutCompleted - Ob der gesamte Tag abgeschlossen ist.
 */
function WorkoutView({
  weekKey,
  dayKey,
  dayData,
  onBack,
  onToggleExercise,
  onToggleWorkoutComplete,
  isExerciseCompleted,
  sessionProgress,
  weekDayStatus,
  totalWeekStatus,
  onStartTimer,
  isWorkoutCompleted,
}) {
  const exercisesAvailable = phaseOrder.some(
    (phase) => Array.isArray(dayData?.[phase.key]) && dayData[phase.key].length > 0,
  )

  return (
    <section className="space-y-6 p-4 pb-32 sm:p-8">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-200 transition hover:text-brand-50"
      >
        <ArrowLeft className="h-4 w-4" /> Zur Wochenübersicht
      </button>

      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-300">
          Woche {Number.parseInt(weekKey.replace('week', ''), 10)} · Tag {Number.parseInt(dayKey.replace('day', ''), 10)}
        </p>
        <h1 className="text-3xl font-semibold text-white">{dayData?.title}</h1>
        {dayData?.subtitle ? <p className="text-slate-300">{dayData.subtitle}</p> : null}
      </header>

      <ProgressBar
        session={sessionProgress}
        weekDays={weekDayStatus}
        weeks={totalWeekStatus}
      />

      <button
        type="button"
        onClick={onToggleWorkoutComplete}
        className={`flex w-full items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition ${
          isWorkoutCompleted
            ? 'border-brand-400 bg-brand-500/30 text-white'
            : 'border-white/10 bg-slate-900/60 text-slate-200 hover:border-brand-400/60'
        }`}
      >
        <Sparkles className="h-4 w-4" />
        {isWorkoutCompleted ? 'Workout zurücksetzen' : 'Workout als erledigt markieren'}
      </button>

      {!exercisesAvailable ? (
        <p className="rounded-xl border border-dashed border-white/10 bg-slate-900/40 p-4 text-slate-200">
          Für diesen Tag sind noch keine Übungen hinterlegt.
        </p>
      ) : (
        <div className="space-y-6">
          {phaseOrder.map(({ key, label }) => {
            const exercises = Array.isArray(dayData?.[key]) ? dayData[key] : []
            if (exercises.length === 0) return null

            return (
              <section key={key} className="space-y-3">
                <h2 className="text-lg font-semibold text-white">{label}</h2>
                <div className="space-y-3">
                  {exercises.map((exercise, index) => (
                    <ExerciseCard
                      key={`${key}-${index}`}
                      exercise={exercise}
                      phase={key}
                      index={index}
                      isCompleted={isExerciseCompleted(key, index)}
                      onToggle={() => onToggleExercise(key, index)}
                      onStartTimer={onStartTimer}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default WorkoutView
