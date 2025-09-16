import { useEffect } from 'react'
import { useWakeLock } from '../hooks/useWakeLock'

function WorkoutWakeLock({ isWorkoutActive }) {
  const { isSupported, isActive, requestWakeLock, releaseWakeLock } = useWakeLock()

  useEffect(() => {
    if (!isSupported) return undefined

    if (isWorkoutActive) {
      requestWakeLock()
    } else {
      releaseWakeLock()
    }

    return () => {
      releaseWakeLock()
    }
  }, [isWorkoutActive, isSupported, releaseWakeLock, requestWakeLock])

  if (!isWorkoutActive || !isSupported) return null

  return (
    <div className="fixed bottom-20 right-4 z-30">
      <div className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1 text-xs text-emerald-100 backdrop-blur-sm shadow-soft">
        {isActive ? '🔒 Bildschirm aktiv' : '📱 Wake Lock verfügbar'}
      </div>
    </div>
  )
}

export default WorkoutWakeLock
