import { Box, Container, Grid, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import CardsSection from './CardsSection'

export default function WhyTarkeys() {
  return (
    <Box
      id="why-tarkeys"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100dvh - 56px)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/why-tarkeys/bg.png)',
          backgroundSize: '50% auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center center',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'rotate(90deg)',
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          py: 5,
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
        }}
      >
        <Stack height="100%" width="100%" justifyContent="center" spacing={{ xs: 2, md: 3 }}>
          <SectionHeader />

          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 4 }}
            alignItems="center"
            direction={{ xs: 'column-reverse', md: 'row' }}
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component={motion.img}
                src="/images/why-tarkeys/side-image.png"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  display: 'block',
                  mx: { xs: 'auto', md: 0 },
                }}
                initial={{ opacity: 0, x: -40, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.8, ease: 'easeOut' },
                  x: { duration: 0.8, ease: 'easeOut' },
                  scale: { duration: 0.8, ease: 'easeOut' },
                  y: {
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror',
                  },
                }}
                viewport={{ once: true }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <CardsSection />
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          top: '-200px',
          right: { xs: 0, md: 206 },
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(254, 206, 48, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'translate(25%, -25%)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(27, 196, 113, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'translate(-25%, 25%)',
        }}
      />
    </Box>
  )
}
