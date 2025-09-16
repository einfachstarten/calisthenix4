import { useCallback, useEffect, useRef, useState } from 'react'

export function useWakeLock() {
  const [isSupported, setIsSupported] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const wakeLockRef = useRef(null)
  const releaseListenerRef = useRef(null)
  const shouldReacquireRef = useRef(false)

  useEffect(() => {
    if (typeof navigator === 'undefined') return
    setIsSupported('wakeLock' in navigator)
  }, [])

  const requestWakeLock = useCallback(async () => {
    if (!isSupported || typeof navigator === 'undefined') return false

    try {
      const wakeLock = await navigator.wakeLock.request('screen')
      wakeLockRef.current = wakeLock
      shouldReacquireRef.current = true
      const handleRelease = () => {
        setIsActive(false)
      }
      releaseListenerRef.current = handleRelease
      wakeLock.addEventListener('release', handleRelease)
      setIsActive(true)
      return true
    } catch (error) {
      console.error('[WakeLock] Aktivierung fehlgeschlagen:', error)
      shouldReacquireRef.current = false
      return false
    }
  }, [isSupported])

  const releaseWakeLock = useCallback(async () => {
    shouldReacquireRef.current = false
    const wakeLock = wakeLockRef.current
    if (!wakeLock) {
      setIsActive(false)
      return
    }

    const listener = releaseListenerRef.current
    if (listener) {
      wakeLock.removeEventListener('release', listener)
      releaseListenerRef.current = null
    }

    try {
      await wakeLock.release()
    } catch (error) {
      console.error('[WakeLock] Freigabe fehlgeschlagen:', error)
    } finally {
      wakeLockRef.current = null
      setIsActive(false)
    }
  }, [])

  useEffect(() => {
    if (!isSupported || typeof document === 'undefined') return undefined

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && shouldReacquireRef.current && !isActive) {
        requestWakeLock()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [isActive, isSupported, requestWakeLock])

  useEffect(
    () => () => {
      releaseWakeLock()
    },
    [releaseWakeLock],
  )

  return {
    isSupported,
    isActive,
    requestWakeLock,
    releaseWakeLock,
  }
}
