import PageSection from '@/components/PageSection'
import { Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'

const MotionTypography = motion.create(Typography)

export default function Reviews() {
  const { formatMessage: f } = useIntl()

  return (
    <PageSection
      id="reviews"
      bgImage="/images/reviews/bg.png"
      bgRotation="rotate(180deg)"
      bgSize="75% auto"
      fades={[
        {
          color: 'rgba(220, 36, 60, 0.15)',
          position: {
            right: 0,
            top: 0,
            transform: 'translate(25%, -50%)',
          },
          sx: { width: { xs: 350, md: 500 }, height: { xs: 350, md: 500 } },
        },
      ]}
    >
      <Stack spacing={{ xs: 2, md: 3 }} alignItems="center">
        <MotionTypography
          variant="subtitle1"
          fontSize={{ xs: 28, md: 32 }}
          color="primary"
          sx={{
            filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          {f({ id: 'userReviewsTitle' })}
        </MotionTypography>
      </Stack>
    </PageSection>
  )
}
