import { useCallback, useEffect, useState } from 'react'

const getInitialPath = () => {
  if (typeof window === 'undefined') return '/'
  return window.location.pathname || '/'
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(getInitialPath)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((path, options = {}) => {
    if (typeof window === 'undefined' || typeof path !== 'string') return

    const { replace = false } = options
    if (replace) {
      window.history.replaceState({}, '', path)
    } else {
      window.history.pushState({}, '', path)
    }
    setCurrentPath(window.location.pathname || '/')
  }, [])

  return { currentPath, navigate }
}
