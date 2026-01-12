import PageSection from '@/components/PageSection'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import ReviewCard from './ReviewCard'
import { getReviewsByLocale } from './_mock'

const MotionTypography = motion.create(Typography)

export default function Reviews() {
  const { formatMessage: f } = useIntl()
  const reviews = getReviewsByLocale('ar')
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: false, stopOnFocusIn: true, speed: 2, startDelay: 4 }),
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
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                component="img"
                src="/images/reviews/image.png"
                sx={{ width: 342, height: 342 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box dir="rtl" className="embla" sx={{ maxWidth: { xs: 325, md: 500, lg: 600 } }}>
                <Box ref={emblaRef} className="embla__viewport">
                  <Box
                    className="embla__container"
                    sx={() => ({
                      direction: 'rtl',
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
