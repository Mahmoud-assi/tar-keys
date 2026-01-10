import { Box, Container, Grid, Stack, useMediaQuery } from '@mui/material'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

export default function HeroSection() {
  const xm = useMediaQuery(theme => theme.breakpoints.between(900, 1200))

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100dvh - 56px)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: '75% auto',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'rotate(180deg)',
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
        <Stack height="100%" width="100%" justifyContent="center">
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 4 }}
            direction={{ xs: 'column-reverse', md: 'row' }}
            justifyContent={{ xs: 'start', md: 'space-between' }}
            alignContent="center"
          >
            <Grid size={{ xs: 12, md: xm ? 6.75 : 6 }}>
              <FirstSection />
            </Grid>
            <Grid size={{ xs: 12, md: xm ? 5.25 : 6 }}>
              <SecondSection />
            </Grid>
          </Grid>
        </Stack>
      </Container>

      {/* RED FADE (Top Left) - Color: #DC243C */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(220, 36, 60, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'translate(-25%, -25%)',
        }}
      />

      {/* GREEN FADE (Top Right) - Color: #1BC471 */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(27, 196, 113, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'translate(25%, -25%)',
        }}
      />

      {/* YELLOW FADE (Bottom Right) - Color: #FECE30 */}
      {/* This connects to the next section */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-200px',
          right: { xs: 0, md: 206 },
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(254, 206, 48, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
          transform: 'translate(25%, 25%)',
        }}
      />
    </Box>
  )
}
