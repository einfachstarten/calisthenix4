const APP_VERSION = 'calisthenix-v1.2.0'
const STATIC_CACHE = `calisthenix-static-${APP_VERSION}`
const DYNAMIC_CACHE = `calisthenix-dynamic-${APP_VERSION}`

const APP_SHELL = ['/', '/index.html', '/manifest.json']

// Icon artwork is not committed to the repository. Add the PNG files listed in
// `public/icons/README.md` to enable full pre-caching of icons, shortcuts, and
// notification assets once they are available.
const OPTIONAL_ASSETS = [
  '/icons/icon-16x16.png',
  '/icons/icon-32x32.png',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/icons/shortcut-training.png',
  '/icons/shortcut-progress.png',
  '/icons/shortcut-timer.png',
  '/icons/action-start.png',
  '/icons/action-later.png',
  '/icons/action-snooze.png',
  '/icons/splash-640x1136.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(STATIC_CACHE)
        await cache.addAll(APP_SHELL)
        await Promise.all(
          OPTIONAL_ASSETS.map((asset) =>
            cache.add(asset).catch((error) => {
              console.warn(`[SW] Skipped optional asset ${asset}`, error)
              return undefined
            }),
          ),
        )
      } catch (error) {
        console.error('[SW] Failed to pre-cache app shell', error)
      }
    })(),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName)
            }
            return undefined
          }),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

const isStaticAsset = (url) => {
  if (url.origin !== self.location.origin) return false
  return (
    APP_SHELL.includes(url.pathname) ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/assets/') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css')
  )
}

const cacheFirst = async (request) => {
  const cached = await caches.match(request)
  if (cached) return cached

  try {
    const response = await fetch(request)
    if (response && response.ok) {
      const cache = await caches.open(STATIC_CACHE)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    console.error('[SW] Cache-first fetch failed', error)
    throw error
  }
}

const networkFirst = async (request) => {
  try {
    const response = await fetch(request)
    if (response && response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    const cached = await caches.match(request)
    if (cached) return cached

    if (request.mode === 'navigate') {
      const fallback = await caches.match('/index.html')
      if (fallback) return fallback
    }
    throw error
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event

  if (request.method !== 'GET') return

  const url = new URL(request.url)

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request))
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then((cached) => {
        if (cached) {
          fetch(request)
            .then(async (response) => {
              if (response && response.ok) {
                const cache = await caches.open(STATIC_CACHE)
                cache.put('/index.html', response.clone())
              }
            })
            .catch(() => {})
          return cached
        }
        return networkFirst(request)
      }),
    )
    return
  }

  if (url.origin !== self.location.origin) {
    event.respondWith(
      fetch(request).catch(() => caches.match(request)),
    )
    return
  }

  event.respondWith(networkFirst(request))
})

self.addEventListener('sync', (event) => {
  if (event.tag === 'workout-progress-sync') {
    event.waitUntil(syncWorkoutProgress())
  }
})

self.addEventListener('push', (event) => {
  const body = event.data ? event.data.text() : 'Zeit für dein Workout!'
  const options = {
    body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/',
      timestamp: Date.now(),
    },
    actions: [
      { action: 'start-workout', title: 'Workout starten', icon: '/icons/action-start.png' },
      { action: 'remind-later', title: 'Später erinnern', icon: '/icons/action-later.png' },
    ],
    requireInteraction: true,
    tag: 'workout-reminder',
  }

  event.waitUntil(self.registration.showNotification('Calisthenix Training', options))
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'start-workout') {
    event.waitUntil(self.clients.openWindow('/?source=notification&action=start-workout'))
    return
  }

  if (event.action === 'remind-later') {
    event.waitUntil(scheduleNotification(30 * 60 * 1000, 'Immer noch bereit für dein Workout?'))
    return
  }

  event.waitUntil(self.clients.openWindow('/?source=notification'))
})

const scheduleNotification = async (delay, message) => {
  if (typeof delay !== 'number' || delay <= 0) {
    return false
  }

  try {
    const clientsList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    clientsList.forEach((client) => {
      client.postMessage({
        type: 'SCHEDULE_WORKOUT_REMINDER',
        payload: { delay, message },
      })
    })

    if (clientsList.length === 0) {
      setTimeout(() => {
        self.registration.showNotification('Calisthenix Training', {
          body: message || 'Zeit für dein Workout!',
          icon: '/icons/icon-192x192.png',
          badge: '/icons/icon-72x72.png',
          vibrate: [200, 100, 200],
          tag: 'workout-reminder-fallback',
        })
      }, Math.min(delay, 5 * 60 * 1000))
    }

    return true
  } catch (error) {
    console.error('[SW] Unable to reschedule notification', error)
    return false
  }
}

const syncWorkoutProgress = async () => {
  try {
    const clientsList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    clientsList.forEach((client) => {
      client.postMessage({ type: 'SYNC_WORKOUT_PROGRESS' })
    })
  } catch (error) {
    console.error('[SW] Sync failed', error)
  }
}
