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
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton } from './useDotButton'
import { usePrevNextButtons } from './usePrevNextButtons'

const MotionTypography = motion.create(Typography)

export default function Courses() {
  const { formatMessage: f } = useIntl()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    // slidesToScroll: 'auto',
    // dragFree: true,
  })
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

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
    <Box key={course.id} className="embla__slide">
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
      {scrollSnaps.map((_, index) => (
        <IconButton
          key={index}
          onClick={() => onDotButtonClick(index)}
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
              width: selectedIndex === index ? (mobile ? 10 : 12) : mobile ? 6 : 8,
              height: selectedIndex === index ? (mobile ? 10 : 12) : mobile ? 6 : 8,
              borderRadius: '50%',
              bgcolor: selectedIndex === index ? 'primary.main' : 'grey.300',
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
              <IconButton onClick={onPrevButtonClick}>
                <Box component="img" src="/images/courses/next.png" />
              </IconButton>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Box className="embla" ref={emblaRef}>
              <Box className="embla__viewport">
                <Box className="embla__container">{mock_data.map(renderCarouselItem)}</Box>
              </Box>
            </Box>
            {scrollSnaps.length > 1 && renderDots()}
          </Grid>
          <Grid size={{ xs: 1 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack alignItems="center">
              <IconButton onClick={onNextButtonClick}>
                <Box component="img" src="/images/courses/prev.png" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )

  const renderMobileCarousel = () => (
    <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box className="embla">
        <Box ref={emblaRef} className="embla__viewport">
          <Box className="embla__container">
            {mock_data.map(course => (
              <Box key={course.id} className="embla__slide">
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
          </Box>
        </Box>
      </Box>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid size={{ xs: 2 }}>
          <IconButton onClick={onPrevButtonClick}>
            <Box component="img" src="/images/courses/next.png" />
          </IconButton>
        </Grid>
        <Grid size={{ xs: 8 }}>{renderDots(true)}</Grid>
        <Grid size={{ xs: 2 }}>
          <IconButton onClick={onNextButtonClick}>
            <Box component="img" src="/images/courses/prev.png" />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  )

  return (
    <PageSection
      bgImage="/images/courses/bg.png"
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
      </Stack>
    </PageSection>
  )
}
