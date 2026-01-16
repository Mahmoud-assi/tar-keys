import { Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'

const MotionTypography = motion.create(Typography)

export default function CoursesHeader() {
  const { formatMessage: f } = useIntl()

  return (
    <Stack spacing={2} alignItems="center" sx={{ mb: { xs: 3, md: 4 } }}>
      <MotionTypography
        variant="subtitle1"
        fontSize={{ xs: 28, md: 32 }}
        color="primary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        sx={{
          filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
        }}
      >
        {f({ id: 'coursesTitle' })}
      </MotionTypography>
      <MotionTypography
        variant="body1"
        fontSize={{ xs: 16, md: 20 }}
        sx={{
          textAlign: 'justify',
          textAlignLast: 'center',
          maxWidth: '800px',
          px: { xs: 2, md: 0 },
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {f({ id: 'coursesDescription' })}
      </MotionTypography>
    </Stack>
  )
}
