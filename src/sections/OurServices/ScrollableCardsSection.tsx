import { Card, Typography, Box, Container, Grid, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'

export default function ScrollableCardSection() {
  const { formatMessage: f } = useIntl()

  return (
    <Box width="100%">
      <Container maxWidth="lg">
        {[
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
              width: { xs: 288, md: 370 },
              height: { xs: 146, md: 158 },
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
              width: { xs: 184, md: 222 },
              height: { xs: 146, md: 177 },
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
              width: { xs: 184, md: 223 },
              height: { xs: 146, md: 177 },
            },
          },
        ].map((d, idx) => (
          <Card
            key={d.label}
            variant="outlined"
            sx={{
              ...d.sx,
              borderRadius: 3,
              p: 3,
              position: 'relative',
              overflow: 'hidden',
              mb: 3,
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {/* LEFT CONTENT */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={2}>
                  <Box
                    component="img"
                    src={`/icons/sections/our-services/${idx + 1}.svg`}
                    sx={{ ...d.iconSx, alignSelf: { xs: 'center', md: 'start' } }}
                  />

                  <Stack spacing={1}>
                    <Typography
                      variant="subtitle1"
                      color={d.sx.color}
                      fontSize={{ xs: 16, md: 18 }}
                      textAlign={{ xs: 'center', md: 'start' }}
                    >
                      {f({ id: d.label })}
                    </Typography>

                    <Typography variant="body1" color="textPrimary">
                      {f({ id: d.description })}
                    </Typography>
                  </Stack>

                  <Stack spacing={1}>
                    {d.options.map((option, idx) => (
                      <Stack key={idx} direction="row" alignItems="center" spacing={1}>
                        <Box sx={{ width: 4, height: 4, bgcolor: '#424242', borderRadius: 10 }} />
                        <Typography variant="body2" color="#424242">
                          {f({ id: option })}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} position="relative">
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 200, md: '100%' },
                    alignSelf: 'center',
                    position: 'relative',
                  }}
                >
                  <SideImages />
                </Box>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Container>
    </Box>
  )
}

function SideImages() {
  return (
    <Box width="100%" height="100%" position="relative">
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          // Center entire block on xs
          left: { xs: '50%', md: 'auto' },
          right: { xs: 'auto', md: 0 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          // Block size = original visual width
          width: { xs: 168, md: 314 },
          height: '100%',
        }}
      >
        <Box
          component={motion.img}
          src="/images/our-services/image.png"
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
