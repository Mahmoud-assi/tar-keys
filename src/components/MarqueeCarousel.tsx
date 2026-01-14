'use client'

import { Box } from '@mui/material'
import { motion, useMotionValue, animate, type PanInfo } from 'framer-motion'
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

interface MotionMarqueeCarouselProps {
  children: React.ReactNode[]
  speed?: number // px per second
  gap?: number
  height?: number
  dir?: 'ltr' | 'rtl'
}

export default function MotionMarqueeCarousel({
  children,
  speed = 40,
  gap = 16,
  height = 350,
  dir = 'ltr',
}: MotionMarqueeCarouselProps) {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const animationRef = useRef<ReturnType<typeof animate> | null>(null)
  const contentWidth = useRef(0)

  useLayoutEffect(() => {
    if (!trackRef.current) return
    contentWidth.current = trackRef.current.scrollWidth / 2
  }, [children])

  const stopAutoScroll = () => {
    animationRef.current?.stop()
    animationRef.current = null
  }

  const startAutoScroll = useCallback(() => {
    stopAutoScroll()

    const from = dir === 'rtl' ? -contentWidth.current : 0
    const to = dir === 'rtl' ? 0 : -contentWidth.current

    animationRef.current = animate(x, [from, to], {
      ease: 'linear',
      duration: contentWidth.current / speed,
      repeat: Infinity,
    })
  }, [dir, speed, x])

  const handleDragEnd = (_: MouseEvent | TouchEvent, info: PanInfo) => {
    x.set(x.get() + info.offset.x)
    startAutoScroll()
  }

  useEffect(() => {
    startAutoScroll()
    return stopAutoScroll
  }, [startAutoScroll])

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: 'hidden',
        width: '100%',
        height,
      }}
    >
      <motion.div
        ref={trackRef}
        drag="x"
        dragElastic={0.08}
        dragMomentum={false}
        onDragStart={stopAutoScroll}
        onDragEnd={handleDragEnd}
        style={{
          x,
          display: 'flex',
          gap,
          cursor: 'grab',
          direction: dir,
        }}
      >
        {children}
        {children}
      </motion.div>
    </Box>
  )
}
