let audioContext

/**
 * Erzeugt einen kurzen 800-Hz-Ton als akustisches Signal.
 * Nutzt die Web Audio API, fällt aber bei fehlender Unterstützung still aus.
 */
export function playBeep() {
  if (typeof window === 'undefined') return

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return

    audioContext = audioContext ?? new AudioContext()
    if (audioContext.state === 'suspended') {
      void audioContext.resume()
    }

    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.value = 800

    gainNode.gain.setValueAtTime(0.001, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.3, audioContext.currentTime + 0.02)
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.6)

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.start()
    oscillator.stop(audioContext.currentTime + 0.6)
  } catch (error) {
    console.warn('[audio] Signalton konnte nicht abgespielt werden:', error)
  }
}
