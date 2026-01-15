import PageSection from '@/components/PageSection'
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { useIntl } from 'react-intl'
import { mock_data } from './_mock'
import CourseCard from './CourseCard'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'

const MotionTypography = motion(Typography)
const MotionBox = motion(Box)

export default function Courses() {
  const { formatMessage: f } = useIntl()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'))

  // Calculate items per view based on screen size
  const calculatedItemsPerView = isMobile ? 1 : isTablet ? 3 : 4

  useEffect(() => {
    setItemsPerView(calculatedItemsPerView)
  }, [calculatedItemsPerView])

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev + itemsPerView >= mock_data.length) {
        return 0
      }
      return prev + 1
    })
  }, [itemsPerView])

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        const lastIndex = Math.max(0, mock_data.length - itemsPerView)
        return lastIndex < 0 ? 0 : lastIndex
      }
      return prev - 1
    })
  }, [itemsPerView])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const handleDragStart = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in event) {
      dragStartX.current = event.touches[0].clientX
    } else {
      dragStartX.current = (event as React.MouseEvent).clientX
    }
    setIsDragging(true)
  }, [])

  const handleDragEnd = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging) return

      let dragEndX: number
      if ('touches' in event) {
        dragEndX = event.changedTouches[0].clientX
      } else {
        dragEndX = (event as React.MouseEvent).clientX
      }

      const dragDistance = dragStartX.current - dragEndX
      const minDragDistance = 30

      if (Math.abs(dragDistance) > minDragDistance) {
        if (dragDistance > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }

      setIsDragging(false)
    },
    [isDragging, nextSlide, prevSlide],
  )

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isDragging) {
  //       nextSlide()
  //     }
  //   }, 4000)

  //   return () => clearInterval(interval)
  // }, [nextSlide, isDragging])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.98,
    }),
  }

  const currentItems = mock_data.slice(currentIndex, currentIndex + itemsPerView)
  const maxSlides = Math.max(0, mock_data.length - itemsPerView + 1)

  const renderHeader = () => (
    <Stack spacing={2} alignItems="center" sx={{ mb: { xs: 3, md: 4 } }}>
      <MotionTypography
        variant="subtitle1"
        fontSize={{ xs: 28, md: 32 }}
        color="primary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        sx={{
          filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
        }}
      >
        {f({ id: 'coursesTitle' })}
      </MotionTypography>
      <MotionTypography
        variant="body1"
        fontSize={{ xs: 16, md: 20 }}
        sx={{
          textAlign: 'justify',
          textAlignLast: 'center',
          maxWidth: '800px',
          px: { xs: 2, md: 0 },
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {f({ id: 'coursesDescription' })}
      </MotionTypography>
    </Stack>
  )

  const renderCarouselItem = (course: (typeof mock_data)[0]) => (
    <Box
      key={course.id}
      sx={{
        flex: `0 0 calc(${100 / itemsPerView}% - ${
          ((itemsPerView - 1) * (isTablet ? 16 : 24)) / itemsPerView
        }px)`,
      }}
    >
      <CourseCard
        img={course.cover}
        name={course.name}
        teacher={{
          name: course.teacher.name,
          img: course.teacher.image as string,
        }}
        price={course.original_price}
      />
    </Box>
  )

  const renderDots = (mobile = false) => (
    <Stack
      direction="row"
      spacing={mobile ? 0.5 : 1}
      justifyContent="center"
      alignItems="center"
      sx={mobile ? {} : { mt: 2 }}
    >
      {Array.from({ length: maxSlides }).map((_, index) => (
        <IconButton
          key={index}
          onClick={() => goToSlide(index)}
          sx={{
            p: 0.5,
            '&:hover': {
              transform: mobile ? 'none' : 'scale(1.2)',
              '& .dot': {
                bgcolor: 'primary.light',
              },
            },
            transition: 'transform 0.2s ease',
          }}
        >
          <Box
            className="dot"
            sx={{
              width: currentIndex === index ? (mobile ? 10 : 12) : mobile ? 6 : 8,
              height: currentIndex === index ? (mobile ? 10 : 12) : mobile ? 6 : 8,
              borderRadius: '50%',
              bgcolor: currentIndex === index ? 'primary.main' : 'grey.300',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </IconButton>
      ))}
    </Stack>
  )

  const renderDesktopTabletCarousel = () => (
    <Box>
      <Container maxWidth="lg" sx={{ px: { xs: 0, md: 2 } }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 1 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack alignItems="center">
              <IconButton onClick={prevSlide}>
                <Box
                  component="img"
                  src="/images/courses/next.png"
                  // sx={{ width: 28, height: 28 }}
                />
              </IconButton>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <MotionBox
              sx={{
                overflow: 'hidden',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none',
              }}
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <MotionBox
                  key={currentIndex}
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: 'spring',
                      stiffness: 250,
                      damping: 25,
                      mass: 0.8,
                    },
                    opacity: { duration: 0.15 },
                    scale: { duration: 0.15 },
                  }}
                  sx={{
                    display: 'flex',
                    gap: { xs: 1, md: 2 },
                    justifyContent: 'center',
                    alignItems: 'stretch',
                  }}
                >
                  {currentItems.map(renderCarouselItem)}
                </MotionBox>
              </AnimatePresence>
            </MotionBox>
            {maxSlides > 1 && renderDots()}
          </Grid>
          <Grid size={{ xs: 1 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack alignItems="center">
              <IconButton onClick={nextSlide}>
                <Box
                  component="img"
                  src="/images/courses/prev.png"
                  // sx={{ width: 28, height: 28 }}
                />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )

  const renderMobileCarousel = () => (
    <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
      <MotionBox
        sx={{
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          mb: 2,
        }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <MotionBox
            key={currentIndex}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.8,
              },
              opacity: { duration: 0.15 },
              scale: { duration: 0.15 },
            }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {currentItems.map(course => (
              <Box
                key={course.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: '0 0 100%',
                  px: 1,
                }}
              >
                <CourseCard
                  img={course.cover}
                  name={course.name}
                  teacher={{
                    name: course.teacher.name,
                    img: course.teacher.image as string,
                  }}
                  price={course.original_price}
                />
              </Box>
            ))}
          </MotionBox>
        </AnimatePresence>
      </MotionBox>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid size={{ xs: 2 }}>
          <IconButton onClick={prevSlide}>
            <Box component="img" src="/images/courses/next.png" />
          </IconButton>
        </Grid>
        <Grid size={{ xs: 8 }}>{renderDots(true)}</Grid>
        <Grid size={{ xs: 2 }}>
          <IconButton onClick={nextSlide}>
            <Box component="img" src="/images/courses/prev.png" />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  )

  const renderDragIndicator = () => (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: isDragging ? 0.8 : 0 }}
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        p: 1.5,
        bgcolor: 'rgba(0,0,0,0.8)',
        borderRadius: 3,
        color: 'common.white',
        fontSize: 14,
        backdropFilter: 'blur(2px)',
      }}
    >
      {f({ id: 'swipeToApply' })}
    </MotionBox>
  )

  return (
    <PageSection
      bgImage="/images/courses/bg.png"
      id="courses"
      sx={{ height: { xs: 600, md: 600 } }}
      fades={[
        {
          color: 'rgba(254, 206, 48, 0.15)',
          position: {
            top: 0,
            right: 0,
            transform: 'translateX(-25%)',
          },
        },
      ]}
    >
      <Stack alignItems="center" justifyContent="center" height="100%">
        {renderHeader()}
        {!isMobile ? renderDesktopTabletCarousel() : renderMobileCarousel()}
        {renderDragIndicator()}
      </Stack>
    </PageSection>
  )
}
