import PageSection from '@/components/PageSection'
import { Box, Container, Grid, IconButton, Stack, useTheme, useMediaQuery } from '@mui/material'
import { mock_data } from './_mock'
import CourseCard from './CourseCard'
import DotButtons from './DotButtons'
import CoursesHeader from './CoursesHeader'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton } from './useDotButton'
import { usePrevNextButtons } from './usePrevNextButtons'
import { css, Global } from '@emotion/react'
import Autoplay from 'embla-carousel-autoplay'
import CourseSelection from './CourseSelection'

export default function Courses() {
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.between(450, 560))
  const xxs = useMediaQuery(theme.breakpoints.down(450))
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' }, [Autoplay()])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

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
            {scrollSnaps.length > 1 && (
              <DotButtons
                scrollSnaps={scrollSnaps}
                selectedIndex={selectedIndex}
                onDotButtonClick={onDotButtonClick}
              />
            )}
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
    <Container maxWidth="sm" sx={{ px: { xs: 0, md: 2 } }}>
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
      <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 2, px: 1 }}>
        <Grid size={{ xs: 2 }}>
          <IconButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            <Box component="img" src="/images/courses/next.png" />
          </IconButton>
        </Grid>
        <Grid size={{ xs: 8 }}>
          <DotButtons
            scrollSnaps={scrollSnaps}
            selectedIndex={selectedIndex}
            onDotButtonClick={onDotButtonClick}
            mobile
          />
        </Grid>
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
        <CoursesHeader />
        <Stack spacing={2} alignItems="center">
          <CourseSelection />
          {!isMobile ? renderDesktopTabletCarousel() : renderMobileCarousel()}
        </Stack>
      </Stack>
    </PageSection>
  )
}
