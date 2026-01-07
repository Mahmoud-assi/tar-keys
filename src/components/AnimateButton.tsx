import React from 'react'
import { motion, useCycle } from 'framer-motion'

type AnimateButtonType = 'slide' | 'scale' | 'rotate'
type AnimateDirection = 'up' | 'down' | 'left' | 'right'

interface ScaleConfig {
  hover: number
  tap: number
}

interface AnimateButtonProps {
  children: React.ReactNode
  type?: AnimateButtonType
  direction?: AnimateDirection
  offset?: number
  scale?: number | ScaleConfig
}

export default function AnimateButton({
  children,
  type = 'scale',
  direction = 'right',
  offset = 10,
  scale = { hover: 1.05, tap: 0.954 },
}: AnimateButtonProps) {
  let offset1: number
  let offset2: number

  switch (direction) {
    case 'up':
    case 'left':
      offset1 = offset
      offset2 = 0
      break
    case 'right':
    case 'down':
    default:
      offset1 = 0
      offset2 = offset
      break
  }
  const [x, cycleX] = useCycle(offset1, offset2)
  const [y, cycleY] = useCycle(offset1, offset2)

  let scaleProps: ScaleConfig
  if (typeof scale === 'number')
    scaleProps = {
      hover: scale,
      tap: scale,
    }
  else scaleProps = scale

  switch (type) {
    case 'rotate':
      return (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 2,
            repeatDelay: 0,
          }}
        >
          {children}
        </motion.div>
      )
    case 'slide':
      if (direction === 'up' || direction === 'down')
        return (
          <motion.div animate={{ y: y }} onHoverEnd={() => cycleY()} onHoverStart={() => cycleY()}>
            {children}
          </motion.div>
        )

      return (
        <motion.div animate={{ x: x }} onHoverEnd={() => cycleX()} onHoverStart={() => cycleX()}>
          {children}
        </motion.div>
      )

    case 'scale':
    default:
      return (
        <motion.div whileHover={{ scale: scaleProps?.hover }} whileTap={{ scale: scaleProps?.tap }}>
          {children}
        </motion.div>
      )
  }
}

// Using an object (different values for hover vs tap)
{
  /* <AnimateButton scale={{ hover: 1.1, tap: 0.9 }}>
  <Button>Custom Scale</Button>
</AnimateButton> */
}
