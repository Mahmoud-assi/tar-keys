import { Box, Grid, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import PageSection from '@/components/PageSection'
import SectionHeader from './SectionHeader'
import CardsSection from './CardsSection'

export default function WhyTarkeys() {
  return (
    <PageSection
      id="why-tarkeys"
      bgImage="/images/why-tarkeys/bg.png"
      fades={[
        {
          color: 'rgba(254, 206, 48, 0.15)',
          position: {
            top: '-200px',
            right: { xs: 0, md: 206 },
            transform: 'translate(25%, -25%)',
          },
        },
        {
          color: 'rgba(27, 196, 113, 0.15)',
          position: { bottom: -100, left: 0, transform: 'translate(-25%, 25%)' },
        },
      ]}
      sx={{ height: { xs: 'auto', md: 700 }, minHeight: { xs: 'auto', md: 700 } }}
    >
      <Stack alignItems="center" justifyContent="center" height="100%" spacing={{ xs: 2, md: 3 }}>
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
    </PageSection>
  )
}
