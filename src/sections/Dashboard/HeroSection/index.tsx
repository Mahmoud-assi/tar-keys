import { Grid, Stack, useMediaQuery, useTheme } from '@mui/material'
import PageSection, { type FadeConfig } from '@/components/PageSection'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

export default function HeroSection() {
  const theme = useTheme()
  const xm = useMediaQuery(theme.breakpoints.between(900, 1200))

  return (
    <PageSection
      id="home"
      bgImage="/images/hero-bg.png"
      bgRotation="rotate(180deg)"
      bgSize="75% auto"
      fades={
        [
          {
            color: 'rgba(220, 36, 60, 0.15)',
            position: { left: 0, top: 0, transform: 'translate(-25%, -25%)' },
          },
          {
            color: 'rgba(27, 196, 113, 0.15)',
            position: { top: 0, right: 0, transform: 'translate(25%, -25%)' },
          },
          {
            color: 'rgba(254, 206, 48, 0.15)',
            position: {
              bottom: '-200px',
              right: { xs: 0, md: 206 },
              transform: 'translate(25%, 25%)',
            },
          },
        ] as FadeConfig[]
      }
      sx={{ height: 700 }}
    >
      <Stack alignItems="center" justifyContent="center" height="100%">
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
    </PageSection>
  )
}
