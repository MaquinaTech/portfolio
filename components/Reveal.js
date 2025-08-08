import { motion, useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { EASING } from '@/utils/animations'

/*
  Generic reveal-on-scroll wrapper to avoid initial flicker ("ticks").
  Renders the hidden state on SSR so elements start invisible, then animates once in view.
*/
export default function Reveal({
  as = 'div',
  children,
  y = 40,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.2,
  className = '',
  style = {},
  ...rest
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount: threshold })

  const variants = useMemo(() => ({
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, ease: EASING, delay } }
  }), [y, duration, delay])

  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      style={{ willChange: 'transform, opacity', ...style }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
