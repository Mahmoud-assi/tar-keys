import PageSection from '@/components/PageSection'
import { Box, Grid } from '@mui/material'

export default function Contact() {
  return (
    <PageSection bgImage="/images/last/bg.png" bgRotation="rotate(-90deg)" bgSize="35% auto">
      <Box width="100%">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid size={{ xs: 6, lg: 4 }}>
            <Box component="img" src="/images/last/1.png" />
          </Grid>
          <Grid size={{ xs: 6, lg: 4 }}></Grid>
          <Grid size={{ xs: 6, lg: 4 }}>
            <Box component="img" src="/images/last/1.png" />
          </Grid>
        </Grid>
      </Box>
    </PageSection>
  )
}
