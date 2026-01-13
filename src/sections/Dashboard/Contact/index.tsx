import PageSection from '@/components/PageSection'
import { Box, Grid, Stack, Typography } from '@mui/material'

export default function Contact() {
  return (
    <PageSection bgImage="/images/last/bg.png" bgRotation="rotate(-90deg)" bgSize="35% auto">
      <Box width="100%">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid size={{ xs: 6, lg: 4 }}>
            <Box component="img" src="/images/last/2.png" />
          </Grid>
          <Grid size={{ xs: 6, lg: 4 }}>
            <Stack spacing={{ xs: 2, md: 3 }}>
              <Typography></Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, lg: 4 }}>
            <Box component="img" src="/images/last/1.png" />
          </Grid>
        </Grid>
      </Box>
    </PageSection>
  )
}
