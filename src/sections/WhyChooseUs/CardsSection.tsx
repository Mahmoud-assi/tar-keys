import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'

export default function CardsSection() {
  const { formatMessage: f } = useIntl()

  return (
    <Box width="100%" position="relative">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        alignItems="stretch"
        component={motion.div}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {[
          {
            label: 'smartQuizzesTitle',
            description: 'smartQuizzesDescription',
            sx: { bgcolor: '#FFEBEB', boxShadow: '0px 4px 16px 0px #F9DA5829' },
          },
          {
            label: 'progressTrackingTitle',
            description: 'progressTrackingDescription',
            sx: { bgcolor: '#D8FFFF', boxShadow: '0px 4px 16px 0px #00FFFF29' },
          },
          {
            label: 'simpleContentTitle',
            description: 'simpleContentDescription',
            sx: { bgcolor: '#DFEFFF', boxShadow: '0px 4px 16px 0px #0080FF29' },
          },
          {
            label: 'shortVideosTitle',
            description: 'shortVideosDescription',
            sx: { bgcolor: '#FFFFEB', boxShadow: '0px 4px 16px 0px #F9DA5829' },
          },
        ].map((d, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={d.label}>
            <Stack
              component={motion.div}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              sx={{ height: '100%' }}
            >
              <Stack
                component={Card}
                spacing={1}
                variant="outlined"
                p={2}
                borderRadius={3}
                sx={{
                  ...d.sx,
                  height: '100%',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0px 12px 32px rgba(0,0,0,0.12)',
                  },
                  cursor: 'pointer',
                }}
              >
                <Stack
                  spacing={1}
                  direction={{ xs: 'row', md: 'column' }}
                  alignItems={{ xs: 'center', md: 'start' }}
                >
                  <Box
                    component={motion.img}
                    src={`/icons/sections/why-tarkeys/${idx + 1}.svg`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    sx={{ width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 } }}
                  />
                  <Typography variant="subtitle1" fontSize={{ xs: 14, md: 16 }}>
                    {f({ id: d.label })}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" fontSize={{ xs: 12, md: 14 }} fontWeight={300}>
                  {f({ id: d.description })}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* UPDATED BLUE FADE #3347C1 */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: -50, md: -125 },
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 350, md: 500 },
          height: { xs: 350, md: 500 },
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(51, 71, 193, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </Box>
  )
}
