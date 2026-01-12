import { Card, Typography, Box, Grid, Stack } from '@mui/material'
import { motion, useTransform, MotionValue } from 'framer-motion'
import { useIntl } from 'react-intl'
import { CARDS_DATA } from './_mock'
import SideImages from './SideImages'

export default function ScrollableCardSection({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>
}) {
  const { formatMessage: f } = useIntl()
  const y0 = useTransform(scrollProgress, [0, 0.33], [0, -1000])
  const y1 = useTransform(scrollProgress, [0, 0.33, 0.33, 0.66], [0, 0, 0, -1000])
  const y2 = useTransform(scrollProgress, [0.33, 0.66], [0, 0])

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1200,
        height: 600,
        position: 'relative',
      }}
    >
      {CARDS_DATA.map((d, idx) => {
        const zIndex = 30 - idx * 10
        return (
          <motion.div
            key={d.label}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              y: [y0, y1, y2][idx],
              zIndex,
            }}
          >
            <Card
              variant="outlined"
              sx={{
                ...d.sx,
                borderRadius: 3,
                p: { xs: 2, md: 4 },
                width: '90%',
                maxWidth: 1100,
                // marginTop: 2,
              }}
            >
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={2} justifyContent="center" height="100%">
                    <Box
                      component="img"
                      src={`/icons/sections/our-services/${idx + 1}.svg`}
                      sx={{ ...d.iconSx, alignSelf: { xs: 'center', md: 'start' } }}
                    />
                    <Stack spacing={1}>
                      <Typography
                        variant="subtitle1"
                        color={d.sx.color}
                        fontSize={{ xs: 16, md: 20 }}
                        fontWeight="bold"
                        textAlign={{ xs: 'center', md: 'start' }}
                      >
                        {f({ id: d.label })}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        textAlign={{ xs: 'center', md: 'start' }}
                      >
                        {f({ id: d.description })}
                      </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      {d.options.map((option, optIdx) => (
                        <Stack key={optIdx} direction="row" alignItems="center" spacing={1}>
                          <Box sx={{ width: 4, height: 4, bgcolor: '#424242', borderRadius: 10 }} />
                          <Typography
                            variant="body2"
                            color="#424242"
                            textAlign={{ xs: 'center', md: 'start' }}
                          >
                            {f({ id: option })}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    position: 'relative',
                    minHeight: { xs: 200, md: 350 },
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}
                >
                  <SideImages />
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        )
      })}
    </Box>
  )
}
