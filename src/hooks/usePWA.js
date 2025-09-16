import { useCallback, useEffect, useState } from 'react'

const getInitialOnlineStatus = () => {
  if (typeof navigator === 'undefined') return true
  return navigator.onLine
}

export function usePWA() {
  const [isInstallable, setIsInstallable] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [installPrompt, setInstallPrompt] = useState(null)
  const [isOnline, setIsOnline] = useState(getInitialOnlineStatus)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const updateInstalledState = () => {
      try {
        const isInStandaloneDisplay = window.matchMedia?.('(display-mode: standalone)').matches
        const isIOSStandalone = window.navigator?.standalone === true
        setIsInstalled(Boolean(isInStandaloneDisplay || isIOSStandalone))
      } catch (error) {
        console.warn('[PWA] Konnte Installationsstatus nicht prüfen:', error)
      }
    }

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setInstallPrompt(event)
      setIsInstallable(true)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setIsInstallable(false)
      setInstallPrompt(null)
    }

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    updateInstalledState()

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  useEffect(() => {
    if (isInstalled) {
      setIsInstallable(false)
      setInstallPrompt(null)
    }
  }, [isInstalled])

  const installApp = useCallback(async () => {
    if (!installPrompt) return false

    try {
      installPrompt.prompt?.()
      const choiceResult = await installPrompt.userChoice
      const accepted = choiceResult?.outcome === 'accepted'
      setIsInstallable(false)
      setInstallPrompt(null)
      if (accepted) {
        setIsInstalled(true)
      }
      return accepted
    } catch (error) {
      console.error('[PWA] Installation fehlgeschlagen:', error)
      return false
    }
  }, [installPrompt])

  return {
    isInstallable,
    isInstalled,
    isOnline,
    installApp,
  }
}
