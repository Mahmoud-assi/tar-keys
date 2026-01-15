// // import { useRef, useState, useEffect } from 'react'
// // import PageSection from '@/components/PageSection'
// // import { Box, Grid, Stack, Typography } from '@mui/material'
// // import { useIntl } from 'react-intl'
// // import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
// // import ReviewCard from './ReviewCard'
// // import { getReviewsByLocale } from './_mock'

// // const MotionTypography = motion.create(Typography)
// // const MotionImg = motion.create('img')

// // export default function Reviews() {
// //   const { formatMessage: f } = useIntl()
// //   const reviews = getReviewsByLocale('ar')

// //   const trackRef = useRef<HTMLDivElement>(null)
// //   const x = useMotionValue(0)

// //   const [trackWidth, setTrackWidth] = useState(0)
// //   const [isDragging, setIsDragging] = useState(false)

// //   useEffect(() => {
// //     const calc = () => {
// //       if (!trackRef.current) return

// //       const children = Array.from(trackRef.current.children)
// //       const half = children.slice(0, children.length / 2)

// //       const width = half.reduce((acc, el) => acc + (el as HTMLElement).offsetWidth, 0)

// //       setTrackWidth(width)
// //     }

// //     calc()
// //     window.addEventListener('resize', calc)
// //     return () => window.removeEventListener('resize', calc)
// //   }, [reviews])

// //   useAnimationFrame(() => {
// //     if (isDragging || !trackWidth) return

// //     const current = x.get()
// //     const speed = -0.6

// //     let next = current + speed
// //     if (Math.abs(next) >= trackWidth) {
// //       next = 0
// //     }

// //     x.set(next)
// //   })

// //   return (
// //     <PageSection
// id="reviews"
// bgImage="/images/reviews/bg.png"
// bgRotation="rotate(180deg)"
// bgSize="75% auto"
// fades={[
//   {
//     color: 'rgba(220, 36, 60, 0.15)',
//     position: {
//       right: 0,
//       top: 0,
//       transform: 'translate(25%, -50%)',
//     },
//     sx: { width: { xs: 350, md: 500 }, height: { xs: 350, md: 500 } },
//   },
// ]}
// sx={{ height: { xs: 'auto', lg: 500 } }}
// //     >
// //       <Stack spacing={{ xs: 2, md: 3 }} alignItems="center" justifyContent="center" height="100%">
// //         <MotionTypography variant="subtitle1" fontSize={{ xs: 28, md: 32 }} color="primary">
// //           {f({ id: 'userReviewsTitle' })}
// //         </MotionTypography>

// //         <Box width="100%">
// //           <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
// //             <Grid size={{ xs: 12, lg: 3 }}>
// //               <Stack alignItems="center" justifyContent="center">
// //                 <MotionImg src="/images/reviews/image.png" style={{ width: 342, height: 342 }} />
// //               </Stack>
// //             </Grid>

// //             <Grid size={{ xs: 12, lg: 9 }}>
// //               <Box
// //                 sx={{
// //                   overflow: 'hidden',
// //                   position: 'relative',
// //                   direction: 'rtl',
// //                   '&::before': {
// //                     content: '""',
// //                     position: 'absolute',
// //                     top: 0,
// //                     right: 0,
// //                     width: 50,
// //                     height: '100%',
// //                     background: 'linear-gradient(to left, #F5FBFD, rgba(255,255,255,0))',
// //                     zIndex: 2,
// //                     pointerEvents: 'none',
// //                   },

// //                   '&::after': {
// //                     content: '""',
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: -4,
// //                     width: 50,
// //                     height: '100%',
// //                     background: 'linear-gradient(to right, #F5FBFD, rgba(255,255,255,0))',
// //                     zIndex: 2,
// //                     pointerEvents: 'none',
// //                   },
// //                 }}
// //               >
// //                 <motion.div
// //                   ref={trackRef}
// //                   style={{
// //                     display: 'flex',
// //                     gap: 16,
// //                     x,
// //                     height: 350,
// //                   }}
// //                   drag="x"
// //                   dragMomentum={false}
// //                   onDragStart={() => setIsDragging(true)}
// //                   onDragEnd={() => setIsDragging(false)}
// //                 >
// //                   {reviews.map((review, idx) => (
// //                     <Box key={idx}>
// //                       <ReviewCard idx={idx + 1} {...review} />
// //                     </Box>
// //                   ))}

// //                   {reviews.map((review, idx) => (
// //                     <Box key={`clone-${idx}`}>
// //                       <ReviewCard idx={idx + 1} {...review} />
// //                     </Box>
// //                   ))}
// //                   {reviews.map((review, idx) => (
// //                     <Box key={`clone-${idx}`}>
// //                       <ReviewCard idx={idx + 1} {...review} />
// //                     </Box>
// //                   ))}
// //                 </motion.div>
// //               </Box>
// //             </Grid>
// //           </Grid>
// //         </Box>
// //       </Stack>
// //     </PageSection>
// //   )
// // }

// import { useRef, useState, useEffect } from 'react'
// import PageSection from '@/components/PageSection'
// import { Box, Grid, Stack, Typography } from '@mui/material'
// import { useIntl } from 'react-intl'
// import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
// import ReviewCard from './ReviewCard'
// import { getReviewsByLocale } from './_mock'

// const MotionTypography = motion.create(Typography)
// const MotionImg = motion.create('img')

// export default function Reviews() {
//   const { formatMessage: f } = useIntl()
//   const reviews = getReviewsByLocale('ar')

//   const trackRef = useRef<HTMLDivElement>(null)
//   const x = useMotionValue(0)

//   const [trackWidth, setTrackWidth] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)

//   // حساب العرض الحقيقي مع gap
//   useEffect(() => {
//     const calc = () => {
//       if (!trackRef.current) return

//       const children = Array.from(trackRef.current.children)
//       const half = children.slice(0, children.length / 2)

//       const width = half.reduce((acc, el) => {
//         const style = window.getComputedStyle(el as HTMLElement)
//         const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight)

//         return acc + (el as HTMLElement).offsetWidth + margin
//       }, 0)

//       setTrackWidth(width)
//     }

//     calc()
//     window.addEventListener('resize', calc)
//     return () => window.removeEventListener('resize', calc)
//   }, [reviews])

//   // محرك الماركي الحقيقي
//   useAnimationFrame(() => {
//     if (isDragging || !trackWidth) return

//     const current = x.get()
//     const speed = -0.6 // RTL

//     let next = current + speed

//     if (Math.abs(next) >= trackWidth) {
//       next = 0
//     }

//     x.set(next)
//   })

//   return (
//     <PageSection
//       id="reviews"
//       bgImage="/images/reviews/bg.png"
//       bgRotation="rotate(180deg)"
//       bgSize="75% auto"
//       fades={[
//         {
//           color: 'rgba(220, 36, 60, 0.15)',
//           position: {
//             right: 0,
//             top: 0,
//             transform: 'translate(25%, -50%)',
//           },
//           sx: { width: { xs: 350, md: 500 }, height: { xs: 350, md: 500 } },
//         },
//       ]}
//       sx={{ height: { xs: 'auto', lg: 500 } }}
//     >
// <Stack spacing={{ xs: 2, md: 3 }} alignItems="center" justifyContent="center" height="100%">
//   <MotionTypography variant="subtitle1" fontSize={{ xs: 28, md: 32 }} color="primary">
//     {f({ id: 'userReviewsTitle' })}
//   </MotionTypography>

//   <Box width="100%">
//     <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
//       <Grid size={{ xs: 12, lg: 3 }}>
//         <Stack alignItems="center" justifyContent="center">
//           <MotionImg src="/images/reviews/image.png" style={{ width: 342, height: 342 }} />
//         </Stack>
//       </Grid>

//             <Grid size={{ xs: 12, lg: 9 }}>
//               <Box
//                 sx={{
//                   width: '100%',
//                   maxWidth: '100%',
//                   overflow: 'hidden',
//                   position: 'relative',
//                   direction: 'rtl',

// '&::before': {
//   content: '""',
//   position: 'absolute',
//   top: 0,
//   right: 0,
//   width: 50,
//   height: '100%',
//   background: 'linear-gradient(to left, #F5FBFD, rgba(255,255,255,0))',
//   zIndex: 2,
//   pointerEvents: 'none',
// },

// '&::after': {
//   content: '""',
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: 50,
//   height: '100%',
//   background: 'linear-gradient(to right, #F5FBFD, rgba(255,255,255,0))',
//   zIndex: 2,
//   pointerEvents: 'none',
// },
//                 }}
//               >
//                 <Box sx={{ width: '100%', overflow: 'hidden' }}>
//                   <motion.div
//                     ref={trackRef}
//                     style={{
//                       display: 'flex',
//                       gap: 16,
//                       x,
//                     }}
//                     drag="x"
//                     dragMomentum={false}
//                     onDragStart={() => setIsDragging(true)}
//                     onDragEnd={() => setIsDragging(false)}
//                   >
//                     {[...reviews, ...reviews].map((review, idx) => (
//                       <Box
//                         key={idx}
//                         sx={{
//                           flexShrink: 0,
//                           width: { xs: 260, sm: 300 },
//                         }}
//                       >
//                         <ReviewCard idx={(idx % reviews.length) + 1} {...review} />
//                       </Box>
//                     ))}
//                   </motion.div>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Stack>
//     </PageSection>
//   )
// }

import { useState } from 'react'
import PageSection from '@/components/PageSection'
import { Box, Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useIntl } from 'react-intl'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import ReviewCard from './ReviewCard'
import { getReviewsByLocale } from './_mock'

const MotionTypography = motion.create(Typography)
const MotionImg = motion.create('img')

export default function Reviews() {
  const { formatMessage: f } = useIntl()
  const reviews = getReviewsByLocale('ar')

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  // عرض الكارد ثابت حسب الشاشة
  const CARD_WIDTH = isMobile ? 225 : isTablet ? 275 : 300
  const GAP = 16

  // عدد الكروت الظاهرين
  const VISIBLE = isMobile ? 1 : 3

  const VIEWPORT_WIDTH = VISIBLE * CARD_WIDTH + (VISIBLE - 1) * GAP

  const x = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)

  // العرض اللي بنعمل عليه loop
  const trackWidth = reviews.length * (CARD_WIDTH + GAP)

  useAnimationFrame(() => {
    if (isDragging) return

    const current = x.get()
    const speed = -0.5

    let next = current + speed

    if (Math.abs(next) >= trackWidth) {
      next = 0
    }

    x.set(next)
  })

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
      sx={{ height: { xs: 'auto', lg: 500 } }}
    >
      <Stack spacing={{ xs: 2, md: 3 }} alignItems="center" justifyContent="center" height="100%">
        <MotionTypography
          variant="subtitle1"
          fontSize={{ xs: 28, md: 32 }}
          color="primary"
          sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {f({ id: 'userReviewsTitle' })}
        </MotionTypography>
        <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 3 }}>
            <Stack alignItems="center" justifyContent="center">
              <MotionImg src="/images/reviews/image.png" style={{ width: 342, height: 342 }} />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 9 }}>
            <Box
              sx={{
                width: VIEWPORT_WIDTH,
                maxWidth: '100%',
                margin: '0 auto',
                overflow: 'hidden',
                position: 'relative',
                direction: 'rtl',

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
              <motion.div
                style={{
                  display: 'flex',
                  gap: `${GAP}px`,
                  x,
                  height: 350,
                }}
                drag="x"
                dragMomentum={false}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
              >
                {[...reviews, ...reviews, ...reviews].map((review, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      // width: CARD_WIDTH,
                      flexShrink: 0,
                    }}
                  >
                    <ReviewCard idx={(idx % reviews.length) + 1} {...review} />
                  </Box>
                ))}
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </PageSection>
  )
}
