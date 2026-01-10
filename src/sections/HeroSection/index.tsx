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
      <Box
        sx={{ position: 'absolute', left: 0, top: 0, width: 325, height: 325 }}
        component="img"
        src="/icons/layout/red-ellipse.svg"
      />
      <Box
        sx={{ position: 'absolute', top: 0, right: 0, width: 325, height: 325 }}
        component="img"
        src="/icons/layout/green-ellipse.svg"
      />
      <Box
        sx={{ position: 'absolute', bottom: -325 / 2, right: 206, width: 325, height: 325 }}
        component="img"
        src="/icons/layout/yellow-ellipse.svg"
      />
    </Box>
  )
}
