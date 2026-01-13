// import { useRef } from 'react'
// import { Typography, Box, Stack } from '@mui/material'
// import { useScroll, useSpring, motion, useTransform } from 'framer-motion'
// import PageSection from '@/components/PageSection'
// import { useIntl } from 'react-intl'
// import ScrollableCardSection from './ScrollableCardsSection'

// const MotionTypography = motion.create(Typography)

// export default function OurServices() {
//   const { formatMessage: f } = useIntl()
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end end'],
//   })

//   const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 60 })
//   const y = useTransform(smoothProgress, [0, 1], [10, -10])
//   const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 1])

//   return (
//     <Box id="our-services" ref={containerRef} sx={{ height: '400vh', position: 'relative' }}>
//       <PageSection
//         bgImage="/images/our-services/bg.png"
//         bgRotation="rotate(-180deg)"
//         bgSize="25% auto"
//         fades={[
//           {
//             color: 'rgba(27, 196, 113, 0.15)',
//             position: {
//               top: -200,
//               left: 0,
//               transform: 'translate(-25%, -25%)',
//             },
//           },
//           {
//             color: 'rgba(27, 196, 113, 0.15)',
//             position: {
//               top: '50%',
//               right: 0,
//               transform: 'translate(25%, -50%)',
//             },
//           },
//           {
//             color: 'rgba(220, 36, 60, 0.15)',
//             position: {
//               top: '50%',
//               left: 0,
//               transform: 'translate(-25%, -50%)',
//             },
//           },
//         ]}
//         sx={{
//           position: 'sticky',
//           top: 24,
//           overflow: 'hidden',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Stack spacing={6} justifyContent="center" alignItems="center" width="100%" zIndex={10}>
//           <MotionTypography
//             variant="subtitle1"
//             fontSize={{ xs: 24, md: 32 }}
//             color="primary"
//             sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
//             style={{ y, scale }}
//           >
//             {f({ id: 'educationalServicesTitle' })}
//           </MotionTypography>
//           <ScrollableCardSection scrollProgress={smoothProgress} />
//         </Stack>
//       </PageSection>
//     </Box>
//   )
// }

import { useEffect, useRef } from 'react'
import { Typography, Box, Stack } from '@mui/material'
import { motion, useSpring, useTransform, useMotionValue, useInView } from 'framer-motion'
import PageSection from '@/components/PageSection'
import { useIntl } from 'react-intl'
import ScrollableCardSection from './ScrollableCardsSection'

const MotionTypography = motion.create(Typography)

export default function OurServices() {
  const { formatMessage: f } = useIntl()
  const containerRef = useRef<HTMLDivElement>(null)
  const progress = useMotionValue(0)
  const smoothProgress = useSpring(progress, {
    damping: 25,
    stiffness: 60,
  })
  const y = useTransform(smoothProgress, [0, 1], [10, -10])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 1])
  const inView = useInView(containerRef, {
    margin: '-30% 0px -30% 0px',
  })

  useEffect(() => {
    if (!inView) return
    progress.set(0)
  }, [inView, progress])

  useEffect(() => {
    if (!inView) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [inView])

  useEffect(() => {
    if (!inView || !containerRef.current) return
    const containerHeight = containerRef.current.clientHeight

    const onWheel = (e: WheelEvent) => {
      const delta = e.deltaY
      const current = progress.get()
      const next = current + delta / containerHeight
      const clamped = Math.min(Math.max(next, 0), 1)

      if (clamped > 0 && clamped < 1) {
        e.preventDefault()
        progress.set(clamped)
        return
      }
      document.body.style.overflow = ''
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [inView, progress])

  return (
    <Box
      id="our-services"
      ref={containerRef}
      sx={{ height: `calc(100dvh - 56px)`, position: 'relative' }}
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
