// import { Typography, Stack } from '@mui/material'
// import PageSection from '@/components/PageSection'
// import { useIntl } from 'react-intl'
// import ScrollableCardSection from './ScrollableCardsSection'

// export default function OurServices() {
//   const { formatMessage: f } = useIntl()

//   return (
//     <PageSection
//       id="our-services"
//       bgImage="/images/our-services/bg.png"
//       bgRotation="rotate(-180deg)"
//       bgSize="25% auto"
//       fades={[
//         {
//           color: 'rgba(27, 196, 113, 0.15)',
//           position: {
//             top: -200,
//             left: 0,
//             transform: 'translate(-25%, -25%)',
//           },
//         },
//         {
//           color: 'rgba(27, 196, 113, 0.15)',
//           position: {
//             top: '50%',
//             right: 0,
//             transform: 'translate(25%, -50%)',
//           },
//         },
//         {
//           color: 'rgba(220, 36, 60, 0.15)',
//           position: {
//             top: '50%',
//             left: 0,
//             transform: 'translate(-25%, -50%)',
//           },
//         },
//       ]}
//       sx={{ position: 'relative', zIndex: 1 }}
//     >
//       <Stack spacing={{ xs: 2, md: 3, lg: 4 }} justifyContent="center" alignItems="center">
//         <Typography
//           variant="subtitle1"
//           fontSize={{ xs: 28, md: 32 }}
//           color="primary"
//           sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
//         >
//           {f({ id: 'educationalServicesTitle' })}
//         </Typography>
//         <ScrollableCardSection />
//       </Stack>
//     </PageSection>
//   )
// }

import React, { useRef } from 'react'
import { Typography, Box, useMediaQuery, useTheme, Stack } from '@mui/material'
import { motion, useScroll, useSpring } from 'framer-motion'
import PageSection from '@/components/PageSection'
import { useIntl } from 'react-intl'
import ScrollableCardSection from './ScrollableCardsSection'

export default function OurServices() {
  const { formatMessage: f } = useIntl()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 60 })

  return (
    // Scroll Track
    <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
      <PageSection
        id="our-services"
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
          top: 0,
          height: '100vh',
          overflow: 'hidden', // Important to contain sliding cards
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack spacing={2} justifyContent="center" alignItems="center" width="100%" zIndex={10}>
          <Typography
            variant="subtitle1"
            fontSize={{ xs: 24, md: 32 }}
            color="primary"
            sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
          >
            {f({ id: 'educationalServicesTitle' })}
          </Typography>

          <ScrollableCardSection scrollProgress={smoothProgress} />
        </Stack>
      </PageSection>
    </div>
  )
}
