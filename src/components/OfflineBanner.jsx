import { Wifi, WifiOff } from 'lucide-react'
import { usePWA } from '../hooks/usePWA'

function OfflineBanner() {
  const { isOnline } = usePWA()

  if (isOnline) return null

  return (
    <div className="fixed inset-x-0 top-0 z-40 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-center text-white shadow-lg animate-slideDown">
      <div className="inline-flex items-center gap-2 text-sm font-semibold">
        <WifiOff className="h-4 w-4" />
        Offline-Modus - Deine Workouts sind trotzdem verfügbar!
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs">
          <Wifi className="h-3 w-3" />
          PWA
        </span>
      </div>
    </div>
  )
}

export default OfflineBanner
