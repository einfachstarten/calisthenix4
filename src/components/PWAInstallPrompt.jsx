import { useState } from 'react'
import { Download, Smartphone, X } from 'lucide-react'
import { usePWA } from '../hooks/usePWA'

function PWAInstallPrompt() {
  const { isInstallable, installApp } = usePWA()
  const [dismissed, setDismissed] = useState(false)

  if (!isInstallable || dismissed) return null

  const handleInstall = async () => {
    const success = await installApp()
    if (success) {
      setDismissed(true)
    }
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto w-[min(90%,32rem)] p-4 animate-slideDown">
      <div className="relative rounded-3xl border border-brand-400/30 bg-gradient-card p-6 shadow-card-hover backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Installationshinweis schließen"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand">
            <Smartphone className="h-6 w-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="mb-2 text-lg font-bold text-white">Calisthenix installieren</h3>
            <p className="mb-4 text-sm text-slate-300">
              Installiere die App für bessere Performance, Offline-Zugang und Push-Benachrichtigungen.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleInstall}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Installieren
              </button>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
              >
                Später
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PWAInstallPrompt
