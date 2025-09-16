import { useEffect, useState } from 'react'

const isBrowser = typeof window !== 'undefined'

/**
 * React-Hook zum Synchronisieren eines Wertes mit dem localStorage.
 * @template T
 * @param {string} key - Eindeutiger localStorage-Schlüssel.
 * @param {T|(() => T)} initialValue - Anfangswert oder Factory-Funktion.
 * @param {{
 *  serialize?: (value: T) => string,
 *  deserialize?: (value: string) => T
 * }} [options] - Optional eigene Serialisierungsfunktionen.
 * @returns {[T, import('react').Dispatch<import('react').SetStateAction<T>>]}
 */
export function useLocalStorage(key, initialValue, options) {
  const serialize = options?.serialize ?? JSON.stringify
  const deserialize = options?.deserialize ?? JSON.parse

  const [storedValue, setStoredValue] = useState(() => {
    const defaultValue =
      typeof initialValue === 'function' ? initialValue() : initialValue

    if (!isBrowser) {
      return defaultValue
    }

    try {
      const item = window.localStorage.getItem(key)
      if (item === null) {
        if (defaultValue !== undefined) {
          window.localStorage.setItem(key, serialize(defaultValue))
        }
        return defaultValue
      }
      return deserialize(item)
    } catch (error) {
      console.warn('[useLocalStorage] Lesen fehlgeschlagen:', error)
      return defaultValue
    }
  })

  useEffect(() => {
    if (!isBrowser) return

    try {
      if (storedValue === undefined) {
        window.localStorage.removeItem(key)
        return
      }
      window.localStorage.setItem(key, serialize(storedValue))
    } catch (error) {
      console.warn('[useLocalStorage] Schreiben fehlgeschlagen:', error)
    }
  }, [key, storedValue, serialize])

  return [storedValue, setStoredValue]
}
