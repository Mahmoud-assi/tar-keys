import { Box, Container, Grid, Stack } from '@mui/material'
import SectionHeader from './SectionHeader'

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
        <Stack height="100%" width="100%" justifyContent="center">
          <SectionHeader />
          <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/images/why-tarkeys/side-image.png"
                sx={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}></Grid>
          </Grid>
        </Stack>
      </Container>
      <Box
        sx={{ position: 'absolute', top: -325 / 2, right: 206, width: 325, height: 325 }}
        component="img"
        src="/icons/layout/yellow-ellipse.svg"
      />
    </Box>
  )
}
