import { useRef } from 'react'
import { Typography, Box, Stack } from '@mui/material'
import { useScroll, useSpring, motion, useTransform } from 'framer-motion'
import PageSection from '@/components/PageSection'
import { useIntl } from 'react-intl'
import ScrollableCardSection from './ScrollableCardsSection'

const MotionTypography = motion.create(Typography)

export default function OurServices() {
  const { formatMessage: f } = useIntl()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 60 })
  const y = useTransform(smoothProgress, [0, 1], [10, -10])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 1])

  return (
    <Box
      id="our-services"
      ref={containerRef}
      sx={{ height: { xs: 1800, md: 1500 }, position: 'relative' }}
    >
      <PageSection
        bgImage="/images/our-services/bg.png"
        bgRotation="rotate(-180deg)"
        bgSize="25% auto"
        fades={[
          {
            color: 'rgba(27, 196, 113, 0.15)',
            position: {
              top: -200,
              left: 0,
              transform: 'translate(-25%, -25%)',
            },
          },
          {
            color: 'rgba(27, 196, 113, 0.15)',
            position: {
              top: '50%',
              right: 0,
              transform: 'translate(25%, -50%)',
            },
          },
          {
            color: 'rgba(220, 36, 60, 0.15)',
            position: {
              top: '50%',
              left: 0,
              transform: 'translate(-25%, -50%)',
            },
          },
        ]}
        sx={{
          position: 'sticky',
          top: 24,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack spacing={6} justifyContent="center" alignItems="center" width="100%" zIndex={10}>
          <MotionTypography
            variant="subtitle1"
            fontSize={{ xs: 24, md: 32 }}
            color="primary"
            sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
            style={{ y, scale }}
          >
            {f({ id: 'educationalServicesTitle' })}
          </MotionTypography>
          <ScrollableCardSection scrollProgress={smoothProgress} />
        </Stack>
      </PageSection>
    </Box>
  )
}
