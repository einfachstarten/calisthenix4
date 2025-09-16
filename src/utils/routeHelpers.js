const normalizePath = (path) => {
  if (typeof path !== 'string' || path.length === 0) return '/'
  const trimmed = path.trim()
  if (!trimmed.startsWith('/')) {
    return `/${trimmed}`
  }
  return trimmed.length > 1 && trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed
}

const getPreferredWeek = (program, currentWeek, weekKeys = []) => {
  if (currentWeek && program?.[currentWeek]) return currentWeek
  return weekKeys.find((key) => program?.[key]) || null
}

const mapTodayToDayKey = (weekData) => {
  if (!weekData) return null
  const dayMap = {
    0: 'day7',
    1: 'day1',
    2: 'day2',
    3: 'day3',
    4: 'day4',
    5: 'day5',
    6: 'day6',
  }

  const todayKey = dayMap[new Date().getDay()]
  if (todayKey && weekData[todayKey]) {
    return todayKey
  }

  const orderedDays = Object.keys(weekData)
    .filter((key) => key.startsWith('day'))
    .sort((a, b) => Number.parseInt(a.replace('day', ''), 10) - Number.parseInt(b.replace('day', ''), 10))

  if (orderedDays.length === 0) return null

  const firstTrainingDay = orderedDays.find((key) => !weekData[key]?.isRestDay)
  return firstTrainingDay || orderedDays[0]
}

export function getViewFromPath(path, context = {}) {
  const normalizedPath = normalizePath(path)
  const { program, currentWeek, weekKeys } = context

  switch (normalizedPath) {
    case '/today': {
      const preferredWeek = getPreferredWeek(program, currentWeek, weekKeys)
      const weekData = preferredWeek ? program?.[preferredWeek] : null
      const dayKey = mapTodayToDayKey(weekData)

      if (!preferredWeek || !dayKey) {
        return { view: 'overview' }
      }

      return {
        view: 'workout',
        selectedWeek: preferredWeek,
        selectedDay: dayKey,
      }
    }

    case '/progress':
      return { view: 'overview', focusProgress: true }

    case '/timer':
      return { view: 'overview', startTimer: true }

    default:
      return { view: 'overview' }
  }
}
