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
import { css, Global } from '@emotion/react'

const MotionTypography = motion.create(Typography)

export default function Courses() {
  const { formatMessage: f } = useIntl()
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.down(560))
  const xxs = useMediaQuery(theme.breakpoints.down(450))
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    // slidesToScroll: 'auto',
    // dragFree: true,
  })
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

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
              <IconButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                <Box component="img" src="/images/courses/next.png" />
              </IconButton>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Box
              className="embla"
              dir="rtl"
              sx={{
                maxWidth: {
                  xs: xxs ? '20rem' : xs ? '24rem' : '32rem',
                  sm: '34rem',
                  md: '45rem',
                  lg: '52rem',
                  xl: '60rem',
                },
              }}
            >
              <Box className="embla__viewport" ref={emblaRef}>
                <Box className="embla__container" sx={{ direction: 'rtl' }}>
                  {mock_data.map(renderCarouselItem)}
                </Box>
              </Box>
            </Box>
            {scrollSnaps.length > 1 && renderDots()}
          </Grid>
          <Grid size={{ xs: 1 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack alignItems="center">
              <IconButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
                <Box component="img" src="/images/courses/prev.png" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )

  const renderMobileCarousel = () => (
    <Container maxWidth="sm" sx={{ px: { xs: 0, sm: 3 } }}>
      <Box
        className="embla"
        dir="rtl"
        sx={{
          maxWidth: {
            xs: xxs ? '20rem' : xs ? '24rem' : '32rem',
            sm: '34rem',
            md: '45rem',
            lg: '52rem',
            xl: '60rem',
          },
        }}
      >
        <Box ref={emblaRef} className="embla__viewport">
          <Box className="embla__container" sx={{ direction: 'rtl' }}>
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
      <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
        <Grid size={{ xs: 2 }}>
          <IconButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            <Box component="img" src="/images/courses/next.png" />
          </IconButton>
        </Grid>
        <Grid size={{ xs: 8 }}>{renderDots(true)}</Grid>
        <Grid size={{ xs: 2 }}>
          <IconButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
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
      <Global
        styles={css`
          .embla {
            --slide-height: 19rem;
            --slide-spacing: 1rem;
          }
          .embla__viewport {
            overflow: hidden;
          }
          .embla__container {
            display: flex;
            touch-action: pan-y pinch-zoom;
            margin-left: calc(var(--slide-spacing) * -1);
          }
          .embla__slide {
            transform: translate3d(0, 0, 0);
            padding-left: var(--slide-spacing);
          }
        `}
      />
      <Stack alignItems="center" justifyContent="center" height="100%">
        {renderHeader()}
        {!isMobile ? renderDesktopTabletCarousel() : renderMobileCarousel()}
      </Stack>
    </PageSection>
  )
}
