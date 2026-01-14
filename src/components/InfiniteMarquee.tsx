import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Box, type SxProps, type Theme } from '@mui/material'
import { motion } from 'framer-motion'

interface InfiniteMarqueeProps {
  children: ReactNode
  speed?: number
  direction?: 'left' | 'right'
  sx?: SxProps<Theme>
}

const InfiniteMarquee = ({
  children,
  speed = 30,
  direction = 'left',
  sx,
  ...props
}: InfiniteMarqueeProps) => {
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate the width of one set of children to determine loop distance
  useEffect(() => {
    const setDimensions = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth)
      }
    }

    // Initial check
    setDimensions()

    // Resize observer ensures accurate measurement if layout changes
    const resizeObserver = new ResizeObserver(setDimensions)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [children])

  // We duplicate content 4 times to ensure the screen is always filled
  const content = [children, children, children, children]

  // Calculate animation range
  // Left: 0 -> -width
  // Right: -width -> 0
  const xRange = direction === 'left' ? [0, -width] : [-width, 0]

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        display: 'flex',
        position: 'relative',
        ...sx,
      }}
      {...props}
    >
      {/* 
         Hidden div used strictly for width measurement.
         IMPORTANT: This is ALWAYS rendered so we can measure it.
         We add display: 'flex' so it mimics the layout of the actual marquee.
      */}
      <Box
        ref={containerRef}
        sx={{
          position: 'absolute',
          visibility: 'hidden',
          zIndex: -1,
          width: 'max-content',
          display: 'flex',
          pointerEvents: 'none',
          alignItems: 'center', // Align items like the real container
        }}
      >
        {children}
      </Box>

      {/* Only render the animation once we have a width > 0 */}
      {width > 0 && (
        <motion.div
          style={{
            display: 'flex',
            width: 'max-content',
            cursor: 'grab',
            touchAction: 'pan-y pinch-zoom',
          }}
          animate={{ x: xRange }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: speed,
          }}
          drag="x"
          dragConstraints={{
            left: direction === 'left' ? -width : 0,
            right: 0,
          }}
          dragElastic={0.2}
          whileTap={{ cursor: 'grabbing' }}
        >
          {content}
        </motion.div>
      )}
    </Box>
  )
}

export default InfiniteMarquee
