import PageSection from '@/components/PageSection'
import { Box, Container, Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'
import VideoPlayer from './Player'

export default function ExploreTarkeys() {
  return (
    <PageSection
      bgImage="/images/explore/bg.png"
      bgRotation="rotate(90deg)"
      fades={[
        {
          color: 'rgba(51, 71, 193, 0.15)',
          position: { top: 0, right: 0, transform: 'translate(25%, 10%)' },
          sx: { width: 350, height: 350 },
        },
        {
          color: 'rgba(220, 36, 60, 0.15)',
          position: {
            right: 0,
            bottom: 0,
            transform: 'translate(25%, 50%)',
          },
          sx: { width: { xs: 350, md: 500 }, height: { xs: 350, md: 500 } },
        },
      ]}
    >
      <Stack alignItems="center" justifyContent="center" height="100%">
        <SectionHeader />
        <Container maxWidth="lg" sx={{ mx: 'auto', mt: { xs: 2, md: 3 }, px: { xs: 0 } }}>
          <VideoPlayer />
        </Container>
      </Stack>
    </PageSection>
  )
}

function SectionHeader() {
  const { formatMessage: f } = useIntl()

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Box
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
          <Typography
            variant="subtitle1"
            fontSize={{ xs: 28, md: 32 }}
            color="primary"
            sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
            textAlign="center"
          >
            {f({ id: 'learningPathTitle' })}
          </Typography>
        </Box>
        <Box
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
          <Typography variant="body2" fontSize={{ xs: 16, md: 20 }}>
            {f({ id: 'learningPathSteps' })}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}
