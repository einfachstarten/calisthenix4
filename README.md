# Calisthenix – 4-Wochen-Calisthenics-Programm

Eine mobile-first Progressive Web App auf Basis von React und Vite, die Nutzer:innen durch ein intensives vierwöchiges Calisthenics-Programm begleitet. Phase 1 liefert die komplette erste Woche inklusive Timer, Fortschritts-Tracking über localStorage sowie Audiofeedback.

## Funktionen (Phase 1)

- 📆 Wochenübersicht mit Motivationszitaten und Tageskarten
- ✅ Fortschritts-Tracking für Workouts und einzelne Übungen (Persistenz via localStorage)
- 🧭 Zwei Ansichten: Übersicht & Workout-Detail inklusive Aufwärmen, Hauptteil, Cooldown
- ⏱️ Globaler Countdown-Timer mit Web-Audio-Signal (800 Hz) für Übungen und Pausen
- 📊 Fortschrittsanzeigen für Session-, Wochen- und Gesamtstatus
- 📱 Mobile-first UI mit Tailwind CSS & Lucide-Icons

## Installation

```bash
npm install
```

## Entwicklung starten

```bash
npm run dev
```

Der Dev-Server läuft standardmäßig auf [http://localhost:5173](http://localhost:5173). Die Anwendung speichert Fortschritt lokal im Browser.

## Produktion bauen

```bash
npm run build
```

Der erzeugte `dist/`-Ordner ist für die Bereitstellung auf Vercel geeignet.

## Linting

```bash
npm run lint
```

## Technologie-Stack

- React 19 mit Hooks
- Vite als Build-Tool
- Tailwind CSS 3
- Lucide React Icons
- Custom Hooks & lokale Speicherung per `useLocalStorage`
- Web Audio API für Timer-Sound

## Struktur

```
src/
├── components/
│   ├── ExerciseCard.jsx
│   ├── OverviewView.jsx
│   ├── ProgressBar.jsx
│   ├── Timer.jsx
│   └── WorkoutView.jsx
├── data/
│   └── workoutProgram.js
├── hooks/
│   └── useLocalStorage.js
├── utils/
│   └── audio.js
├── App.jsx
├── index.css
└── main.jsx
```

## Nächste Schritte (geplant)

- Wochen 2–4 mit detaillierten Inhalten ergänzen
- Erweiterte Animationen & visuelle Verfeinerung
- Manifest & Service Worker für vollwertige PWA
