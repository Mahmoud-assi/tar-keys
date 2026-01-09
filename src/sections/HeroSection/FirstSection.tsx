import AnimateButton from '@/components/AnimateButton'
import { Box, Button, buttonClasses, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'
import StatCard from './StatCard'

const MotionStack = motion(Stack)
const MotionTypography = motion(Typography)

export default function FirstSection() {
  const { formatMessage: f } = useIntl()
  const lg = useMediaQuery(theme => theme.breakpoints.between(1200, 1350))

  return (
    <MotionStack
      spacing={{ xs: 2, md: 3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <MotionTypography
        variants={fadeUp}
        variant="h1"
        fontSize={{ xs: 24, md: 40 }}
        fontWeight={500}
        color="primary"
        sx={{
          filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
          lineHeight: '160%',
          textAlign: 'justify',
          textAlignLast: { xs: 'center', md: 'start' },
        }}
      >
        {f({ id: 'heroTitle' })}
      </MotionTypography>
      <MotionTypography
        variants={fadeUp}
        variant="subtitle1"
        fontSize={{ xs: 16, md: 20 }}
        color="grey.700"
        sx={{
          lineHeight: '160%',
          textAlign: 'justify',
          textAlignLast: { xs: 'center', md: 'start' },
        }}
      >
        {f({ id: 'heroDescription' })}
      </MotionTypography>
      <Grid container spacing={{ xs: 2, md: 3 }} display={{ xs: 'none', lg: 'flex' }}>
        {[
          {
            label: 'teachingHours',
            value: 500,
            sx: {
              bgcolor: '#FFDFE0',
              boxShadow: '0px 4px 16px 0px #0080FF29',
              color: '#DC243C',
            },
          },
          {
            label: 'yearsExperience',
            value: 7,
            sx: {
              bgcolor: '#D8FFFF',
              boxShadow: '0px 4px 16px 0px #00FFFF29',
              color: '#1BC471',
            },
          },
          {
            label: 'studentsCount',
            value: 1000,
            sx: {
              bgcolor: '#FFFFEB',
              boxShadow: '0px 4px 16px 0px #F9DA5829',
              color: '#FECE30',
            },
          },
        ].map(item => (
          <Grid key={item.label} size={{ xs: 12, sm: 6, md: 6, lg: lg ? 6 : 4 }}>
            <StatCard {...item} label={f({ id: item.label })} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{ [`.${buttonClasses.root}`]: { borderRadius: 10 } }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: lg ? 6 : 4 }}>
          <AnimateButton type="slide" direction="up" offset={1.125}>
            <Button fullWidth variant="contained" sx={{ color: 'secondary.main' }}>
              {f({ id: 'browseCourses' })}
            </Button>
          </AnimateButton>
        </Grid>
        {[
          { icon: 'google-play', label: 'googlePlay' },
          { icon: 'app-store', label: 'appStore' },
        ].map(s => (
          <Grid key={s.label} size={{ xs: 12, sm: 6, lg: lg ? 6 : 4 }}>
            <StoreDownloadButton
              iconSrc={`/icons/common/${s.icon}.svg`}
              storeLabel={f({ id: 'downloadVia' })}
              downloadLabel={f({ id: s.label })}
            />
          </Grid>
        ))}
      </Grid>
    </MotionStack>
  )
}

function StoreDownloadButton({
  iconSrc,
  storeLabel,
  downloadLabel,
}: {
  iconSrc: string
  storeLabel: string
  downloadLabel: string
}) {
  return (
    <AnimateButton type="slide" direction="up" offset={1.5}>
      <Button
        variant="outlined"
        fullWidth
        endIcon={<Box component="img" src={iconSrc} />}
        sx={{ boxShadow: '0px 4px 4px 0px #0022FF29' }}
      >
        <Stack direction="row" spacing={1}>
          <Typography variant="body2" color="textPrimary">
            {storeLabel}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            {downloadLabel}
          </Typography>
        </Stack>
      </Button>
    </AnimateButton>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
