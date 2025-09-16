import { useCallback, useEffect, useRef, useState } from 'react'

const getInitialPermission = () => {
  if (typeof Notification === 'undefined') return 'default'
  return Notification.permission
}

export function useNotifications() {
  const [isSupported, setIsSupported] = useState(false)
  const [permission, setPermission] = useState(getInitialPermission)
  const reminderTimeoutRef = useRef(null)

  const clearScheduledReminder = useCallback(() => {
    if (typeof window === 'undefined') return
    if (reminderTimeoutRef.current) {
      window.clearTimeout(reminderTimeoutRef.current)
      reminderTimeoutRef.current = null
    }
  }, [])

  useEffect(() => {
    const supported =
      typeof window !== 'undefined' &&
      typeof Notification !== 'undefined' &&
      'serviceWorker' in navigator

    setIsSupported(supported)
    if (!supported) {
      setPermission('denied')
    }

    return () => {
      clearScheduledReminder()
    }
  }, [clearScheduledReminder])

  const scheduleReminderInternal = useCallback(
    async (delay, message) => {
      if (!isSupported || permission !== 'granted' || typeof window === 'undefined') {
        return false
      }

      if (typeof delay !== 'number' || Number.isNaN(delay) || delay <= 0) {
        return false
      }

      try {
        const registration = await navigator.serviceWorker.ready
        clearScheduledReminder()
        reminderTimeoutRef.current = window.setTimeout(() => {
          registration.showNotification('Calisthenix Training', {
            body: message || 'Zeit für dein Workout!',
            icon: '/icons/icon-192x192.png',
            badge: '/icons/icon-72x72.png',
            vibrate: [200, 100, 200, 100, 200],
            tag: 'workout-reminder',
            requireInteraction: true,
            actions: [
              { action: 'start', title: 'Jetzt starten', icon: '/icons/action-start.png' },
              { action: 'snooze', title: '10 Min später', icon: '/icons/action-snooze.png' },
            ],
          })
        }, delay)
        return true
      } catch (error) {
        console.error('[Notifications] Zeitplanung fehlgeschlagen:', error)
        return false
      }
    },
    [clearScheduledReminder, isSupported, permission],
  )

  useEffect(() => {
    if (!isSupported || typeof navigator === 'undefined') return undefined

    const handleMessage = (event) => {
      const { type, payload } = event.data || {}
      if (type === 'SCHEDULE_WORKOUT_REMINDER') {
        const { delay, message } = payload || {}
        scheduleReminderInternal(delay, message)
      }
    }

    navigator.serviceWorker.addEventListener('message', handleMessage)
    return () => navigator.serviceWorker.removeEventListener('message', handleMessage)
  }, [isSupported, scheduleReminderInternal])

  const requestPermission = useCallback(async () => {
    if (!isSupported || typeof Notification === 'undefined') {
      setPermission('denied')
      return 'denied'
    }

    try {
      const result = await Notification.requestPermission()
      setPermission(result)
      if (result !== 'granted') {
        clearScheduledReminder()
      }
      return result
    } catch (error) {
      console.error('[Notifications] Berechtigung fehlgeschlagen:', error)
      setPermission('denied')
      return 'denied'
    }
  }, [clearScheduledReminder, isSupported])

  const scheduleWorkoutReminder = useCallback(
    async (workoutTime, message) => {
      if (!isSupported || permission !== 'granted') return false

      const now = Date.now()
      let delay = null

      if (typeof workoutTime === 'number') {
        delay = workoutTime
      } else {
        const target = new Date(workoutTime).getTime()
        if (!Number.isFinite(target)) return false
        delay = target - now
      }

      if (delay <= 0) {
        delay = 1000
      }

      return scheduleReminderInternal(delay, message)
    },
    [isSupported, permission, scheduleReminderInternal],
  )

  return {
    isSupported,
    permission,
    requestPermission,
    scheduleWorkoutReminder,
  }
}
