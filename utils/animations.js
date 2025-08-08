// Centralized animation variants and transitions to ensure consistency and avoid initial flicker.
// Using reduced motion preference and consistent easing.
import { useReducedMotion } from 'framer-motion'

export const EASING = [0.22, 1, 0.36, 1]
export const SPRING = { type: 'spring', stiffness: 120, damping: 20, mass: 1 }

export const fadeInUp = (delay = 0, distance = 30) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING, delay }
  }
})

export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren }
  }
})

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: EASING }
  }
})

// Hook to disable certain motion for users that prefer reduced motion
export function useSmartMotion(prefs = {}) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.001 } },
      ...prefs
    }
  }
  return prefs
}
