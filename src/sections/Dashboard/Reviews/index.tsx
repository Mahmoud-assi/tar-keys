import PageSection from '@/components/PageSection'
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import ReviewCard from './ReviewCard'
import { getReviewsByLocale } from './_mock'

const MotionTypography = motion.create(Typography)
const MotionImg = motion.create('img')

export default function Reviews() {
  const { formatMessage: f } = useIntl()
  const xs = useMediaQuery(theme => theme.breakpoints.down(560))
  const xxs = useMediaQuery(theme => theme.breakpoints.down(450))

  const reviews = getReviewsByLocale('ar')
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: true, slidesToScroll: 'auto' }, [
    AutoScroll({
      playOnInit: true,
      stopOnFocusIn: false,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      speed: 1,
      startDelay: 4,
      direction: 'forward',
    }),
  ])
  return (
    <PageSection
      id="reviews"
      bgImage="/images/reviews/bg.png"
      bgRotation="rotate(180deg)"
      bgSize="75% auto"
      fades={[
        {
          color: 'rgba(220, 36, 60, 0.15)',
          position: {
            right: 0,
            top: 0,
            transform: 'translate(25%, -50%)',
          },
          sx: { width: { xs: 350, md: 500 }, height: { xs: 350, md: 500 } },
        },
      ]}
    >
      <Stack spacing={{ xs: 2, md: 3 }} alignItems="center">
        <MotionTypography
          variant="subtitle1"
          fontSize={{ xs: 28, md: 32 }}
          color="primary"
          sx={{
            filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          {f({ id: 'userReviewsTitle' })}
        </MotionTypography>

        <Box width="100%">
          <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack justifyContent="center" alignItems="center">
                <Box
                  component={MotionImg}
                  src="/images/reviews/image.png"
                  sx={{ width: { xs: 342, md: '100%' }, height: { xs: 342, md: '100%' } }}
                  initial={{ opacity: 0, scale: 1 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    opacity: {
                      duration: 0.6,
                      ease: 'easeOut',
                    },
                    scale: {
                      duration: 6,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      delay: 0.6,
                    },
                  }}
                />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <Box
                dir="rtl"
                className="embla"
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
                <Box
                  ref={emblaRef}
                  className="embla__viewport"
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 50,
                      height: '100%',
                      background: 'linear-gradient(to left, #F5FBFD, rgba(255,255,255,0))',
                      zIndex: 2,
                      pointerEvents: 'none',
                    },

                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 50,
                      height: '100%',
                      background: 'linear-gradient(to right, #F5FBFD, rgba(255,255,255,0))',
                      zIndex: 2,
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <Box
                    className="embla__container"
                    sx={() => ({
                      direction: 'rtl',
                      width: '100%',
                      height: 350,
                    })}
                  >
                    {reviews.map((review, idx) => (
                      <Box className="embla__slide" key={idx}>
                        <ReviewCard idx={idx + 1} {...review} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </PageSection>
  )
}
