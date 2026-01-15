import React, { useState, useEffect, useCallback } from 'react'
import { Box, IconButton, Stack, useTheme, useMediaQuery } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'

interface CarouselProps<T = unknown> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  itemsPerView?: number
  autoPlay?: boolean
  autoPlayInterval?: number
}

const MotionBox = motion(Box)

export default function Carousel<T = unknown>({
  items,
  renderItem,
  itemsPerView = 4,
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(itemsPerView)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + itemsToShow >= items.length ? 0 : prev + 1))
  }, [items.length, itemsToShow])

  // Calculate items to show based on screen size
  const calculatedItemsToShow = isMobile ? 1 : isTablet ? 2 : itemsPerView

  // حساب عدد العناصر المعروضة بناءً على حجم الشاشة
  useEffect(() => {
    setItemsToShow(calculatedItemsToShow)
  }, [calculatedItemsToShow])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, nextSlide])

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? Math.max(0, items.length - itemsToShow) : prev - 1))
  }, [items.length, itemsToShow])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // حساب العدد الأقصى للشرائح
  const maxSlides = Math.max(0, items.length - itemsToShow + 1)

  // الحصول على العناصر الحالية للعرض
  const currentItems = items.slice(currentIndex, currentIndex + itemsToShow)

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Navigation Buttons */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <IconButton
          onClick={prevSlide}
          sx={{
            pointerEvents: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 3,
            '&:hover': { bgcolor: 'primary.main', color: 'white' },
            ml: 1,
          }}
        >
          <Box component="img" src="/images/courses/prev.png" sx={{ width: 24, height: 24 }} />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            pointerEvents: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 3,
            '&:hover': { bgcolor: 'primary.main', color: 'white' },
            mr: 1,
          }}
        >
          <Box component="img" src="/images/courses/next.png" sx={{ width: 24, height: 24 }} />
        </IconButton>
      </Box>

      {/* Carousel Items */}
      <AnimatePresence mode="wait">
        <MotionBox
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: '100%',
              justifyContent: 'center',
              px: { xs: 2, md: 0 },
            }}
          >
            {currentItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: `0 0 calc(${100 / itemsToShow}% - ${
                    (16 * (itemsToShow - 1)) / itemsToShow
                  }px)`,
                }}
              >
                {renderItem(item, index)}
              </Box>
            ))}
          </Stack>
        </MotionBox>
      </AnimatePresence>

      {/* Dots Indicators */}
      {maxSlides > 1 && (
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          {Array.from({ length: maxSlides }).map((_, index) => (
            <IconButton
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                p: 0,
                width: 12,
                height: 12,
                '&:hover': { transform: 'scale(1.2)' },
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: currentIndex === index ? 'primary.main' : 'grey.400',
                  transition: 'all 0.3s ease',
                  transform: currentIndex === index ? 'scale(1.2)' : 'scale(1)',
                }}
              />
            </IconButton>
          ))}
        </Stack>
      )}
    </Box>
  )
}
