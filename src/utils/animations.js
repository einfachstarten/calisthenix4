export const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
  out: {
    opacity: 0,
    y: -24,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      mass: 0.85,
      delay: index * 0.05,
    },
  }),
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 28,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 30,
    },
  },
}

export const progressVariants = {
  initial: { scaleX: 0, opacity: 0 },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      opacity: { duration: 0.3 },
    },
  },
}

export const floatVariants = {
  animate: {
    y: [-8, 6, -8],
    rotate: [-2, 2, -2],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const pulseVariants = {
  animate: {
    scale: [1, 1.06, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const slideVariants = {
  left: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  right: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  up: {
    initial: { y: 80, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -80, opacity: 0 },
  },
}

export const springConfig = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
  mass: 1,
}

export const gentleSpring = {
  type: 'spring',
  stiffness: 130,
  damping: 16,
  mass: 0.9,
}

export const bounceSpring = {
  type: 'spring',
  stiffness: 320,
  damping: 12,
  mass: 0.7,
}

