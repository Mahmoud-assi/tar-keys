// import { Card, Typography, Box, Container, Grid, Stack } from '@mui/material'
// import { motion } from 'framer-motion'
// import { useIntl } from 'react-intl'

// export default function ScrollableCardSection() {
//   const { formatMessage: f } = useIntl()

//   return (
//     <Box width="100%">
//       <Container maxWidth="lg">
//         {[
//           {
//             label: 'personalSupervision',
//             description: 'libraryDescription',
//             options: ['updatedFiles', 'importantConcepts', 'practiceImprovesUnderstanding'],
//             sx: {
//               color: '#1BC471',
//               bgcolor: '#D8FFFF',
//               borderColor: '#92FFC9',
//               boxShadow: '0px 4px 16px 0px #00FFFF29',
//             },
//             iconSx: {
//               width: { xs: 288, md: 370 },
//               height: { xs: 146, md: 158 },
//             },
//           },
//           {
//             label: 'smartQuizzesAfterLesson',
//             description: 'quizDescription',
//             options: ['variedQuestions', 'instantResults', 'continuousImprovement'],
//             sx: {
//               color: '#FECE30',
//               bgcolor: '#FFFFEB',
//               borderColor: '#FFEAA4',
//               boxShadow: '0px 4px 16px 0px #F9DA5829',
//             },
//             iconSx: {
//               width: { xs: 184, md: 222 },
//               height: { xs: 146, md: 177 },
//             },
//           },
//           {
//             label: 'interactiveVideos',
//             description: 'videosDescription',
//             options: ['clearExplanation', 'practicalExamples', 'learnAtYourPace'],
//             sx: {
//               color: '#3347C1',
//               bgcolor: '#DFEFFF',
//               borderColor: '#B6C0FF',
//               boxShadow: '0px 4px 16px 0px #0080FF29',
//             },
//             iconSx: {
//               width: { xs: 184, md: 223 },
//               height: { xs: 146, md: 177 },
//             },
//           },
//         ].map((d, idx) => (
//           <Card
//             key={d.label}
//             variant="outlined"
//             sx={{
//               ...d.sx,
//               borderRadius: 3,
//               p: 3,
//               position: 'relative',
//               overflow: 'hidden',
//               mb: 3,
//             }}
//           >
//             <Grid container spacing={{ xs: 2, md: 3 }}>
//               {/* LEFT CONTENT */}
//               <Grid size={{ xs: 12, md: 6 }}>
//                 <Stack spacing={2}>
//                   <Box
//                     component="img"
//                     src={`/icons/sections/our-services/${idx + 1}.svg`}
//                     sx={{ ...d.iconSx, alignSelf: { xs: 'center', md: 'start' } }}
//                   />

//                   <Stack spacing={1}>
//                     <Typography
//                       variant="subtitle1"
//                       color={d.sx.color}
//                       fontSize={{ xs: 16, md: 18 }}
//                       textAlign={{ xs: 'center', md: 'start' }}
//                     >
//                       {f({ id: d.label })}
//                     </Typography>

//                     <Typography variant="body1" color="textPrimary">
//                       {f({ id: d.description })}
//                     </Typography>
//                   </Stack>

//                   <Stack spacing={1}>
//                     {d.options.map((option, idx) => (
//                       <Stack key={idx} direction="row" alignItems="center" spacing={1}>
//                         <Box sx={{ width: 4, height: 4, bgcolor: '#424242', borderRadius: 10 }} />
//                         <Typography variant="body2" color="#424242">
//                           {f({ id: option })}
//                         </Typography>
//                       </Stack>
//                     ))}
//                   </Stack>
//                 </Stack>
//               </Grid>
//               <Grid size={{ xs: 12, md: 6 }} position="relative">
//                 <Box
//                   sx={{
//                     width: '100%',
//                     height: { xs: 200, md: '100%' },
//                     alignSelf: 'center',
//                     position: 'relative',
//                   }}
//                 >
//                   <SideImages />
//                 </Box>
//               </Grid>
//             </Grid>
//           </Card>
//         ))}
//       </Container>
//     </Box>
//   )
// }

// function SideImages() {
//   return (
//     <Box width="100%" height="100%" position="relative">
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 0,
//           // Center entire block on xs
//           left: { xs: '50%', md: 'auto' },
//           right: { xs: 'auto', md: 0 },
//           transform: { xs: 'translateX(-50%)', md: 'none' },
//           // Block size = original visual width
//           width: { xs: 168, md: 314 },
//           height: '100%',
//         }}
//       >
//         <Box
//           component={motion.img}
//           src="/images/our-services/image.png"
//           sx={{
//             position: 'absolute',
//             right: 0,
//             bottom: 0,
//             zIndex: 1,
//             width: { xs: 91, md: 179 },
//             height: { xs: 177, md: 350 },
//           }}
//           animate={{
//             y: [0, -10, 0],
//             rotate: [0, 2, 0],
//             scale: [1, 1.02, 1],
//           }}
//           transition={{
//             duration: 4,
//             ease: 'easeInOut',
//             repeat: Infinity,
//           }}
//         />

//         <Box
//           component={motion.img}
//           src="/images/our-services/image2.png"
//           sx={{
//             position: 'absolute',
//             right: { xs: 81, md: 135 },
//             bottom: 0,
//             zIndex: 2,
//             width: { xs: 77, md: 152 },
//             height: { xs: 151, md: 297 },
//           }}
//           animate={{
//             y: [0, -8, 0],
//             rotate: [0, -2, 0],
//             scale: [1, 1.015, 1],
//           }}
//           transition={{
//             duration: 5,
//             ease: 'easeInOut',
//             repeat: Infinity,
//           }}
//         />
//       </Box>
//     </Box>
//   )
// }

import { Card, Typography, Box, Grid, Stack } from '@mui/material'
import { motion, useTransform, MotionValue } from 'framer-motion'
import { useIntl } from 'react-intl'

const CARDS_DATA = [
  {
    label: 'personalSupervision',
    description: 'libraryDescription',
    options: ['updatedFiles', 'importantConcepts', 'practiceImprovesUnderstanding'],
    sx: {
      color: '#1BC471',
      bgcolor: '#D8FFFF',
      borderColor: '#92FFC9',
      boxShadow: '0px 4px 16px 0px #00FFFF29',
    },
    iconSx: {
      width: { xs: 200, md: 370 },
      height: { xs: 100, md: 158 },
    },
  },
  {
    label: 'smartQuizzesAfterLesson',
    description: 'quizDescription',
    options: ['variedQuestions', 'instantResults', 'continuousImprovement'],
    sx: {
      color: '#FECE30',
      bgcolor: '#FFFFEB',
      borderColor: '#FFEAA4',
      boxShadow: '0px 4px 16px 0px #F9DA5829',
    },
    iconSx: {
      width: { xs: 150, md: 222 },
      height: { xs: 100, md: 177 },
    },
  },
  {
    label: 'interactiveVideos',
    description: 'videosDescription',
    options: ['clearExplanation', 'practicalExamples', 'learnAtYourPace'],
    sx: {
      color: '#3347C1',
      bgcolor: '#DFEFFF',
      borderColor: '#B6C0FF',
      boxShadow: '0px 4px 16px 0px #0080FF29',
    },
    iconSx: {
      width: { xs: 150, md: 223 },
      height: { xs: 100, md: 177 },
    },
  },
]

interface ScrollableCardSectionProps {
  scrollProgress: MotionValue<number>
}

export default function ScrollableCardSection({ scrollProgress }: ScrollableCardSectionProps) {
  const { formatMessage: f } = useIntl()

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        // Fixed height container to hold the stack in the center of the viewport
        height: '600px',
        position: 'relative',
      }}
    >
      {CARDS_DATA.map((d, idx) => {
        // Z-Index: Card 1 on top (30), Card 3 at bottom (10)
        const zIndex = 30 - idx * 10

        let y: MotionValue<number>

        // --- ANIMATION LOGIC ---
        // Using pixels ensures precise sliding regardless of card height

        if (idx === 0) {
          // Card 1: Starts at 0px. Slides up to -1000px between 0% and 33% scroll.
          y = useTransform(scrollProgress, [0, 0.33], [0, -1000])
        } else if (idx === 1) {
          // Card 2:
          // 0% -> 33%: Slides from 30px (deck offset) to 0px (center).
          // 33% -> 66%: Slides from 0px to -1000px (away).
          y = useTransform(scrollProgress, [0, 0.33, 0.33, 0.66], [30, 0, 0, -1000])
        } else {
          // Card 3:
          // 33% -> 66%: Slides from 60px (deck offset) to 0px (center).
          // Stays at 0px afterwards.
          y = useTransform(scrollProgress, [0.33, 0.66], [60, 0])
        }

        return (
          <motion.div
            key={d.label}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%', // Fill the 600px container
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start', // Align to top so sliding down works naturally
              y,
              zIndex,
            }}
          >
            <Card
              variant="outlined"
              sx={{
                ...d.sx,
                borderRadius: 3,
                p: { xs: 2, md: 4 },
                width: '90%',
                maxWidth: 1100,
                marginTop: 2,
              }}
            >
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={2} justifyContent="center" height="100%">
                    <Box
                      component="img"
                      src={`/icons/sections/our-services/${idx + 1}.svg`}
                      sx={{ ...d.iconSx, alignSelf: { xs: 'center', md: 'start' } }}
                    />
                    <Stack spacing={1}>
                      <Typography
                        variant="subtitle1"
                        color={d.sx.color}
                        fontSize={{ xs: 16, md: 20 }}
                        fontWeight="bold"
                        textAlign={{ xs: 'center', md: 'start' }}
                      >
                        {f({ id: d.label })}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        textAlign={{ xs: 'center', md: 'start' }}
                      >
                        {f({ id: d.description })}
                      </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      {d.options.map((option, optIdx) => (
                        <Stack key={optIdx} direction="row" alignItems="center" spacing={1}>
                          <Box sx={{ width: 4, height: 4, bgcolor: '#424242', borderRadius: 10 }} />
                          <Typography
                            variant="body2"
                            color="#424242"
                            textAlign={{ xs: 'center', md: 'start' }}
                          >
                            {f({ id: option })}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    position: 'relative',
                    minHeight: { xs: 200, md: 350 },
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}
                >
                  <SideImages />
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        )
      })}
    </Box>
  )
}

function SideImages() {
  return (
    <Box width="100%" height="100%" position="relative" sx={{ pointerEvents: 'none' }}>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: { xs: '50%', md: 'auto' },
          right: { xs: 'auto', md: 0 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          width: { xs: 168, md: 314 },
          height: '100%',
        }}
      >
        <Box
          component={motion.img}
          src="/images/our-services/image.png"
          alt="Screen 1"
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            zIndex: 1,
            width: { xs: 91, md: 179 },
            height: { xs: 177, md: 350 },
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        <Box
          component={motion.img}
          src="/images/our-services/image2.png"
          alt="Screen 2"
          sx={{
            position: 'absolute',
            right: { xs: 81, md: 135 },
            bottom: 0,
            zIndex: 2,
            width: { xs: 77, md: 152 },
            height: { xs: 151, md: 297 },
          }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, -2, 0],
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </Box>
    </Box>
  )
}
