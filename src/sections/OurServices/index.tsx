import { Typography, Stack } from '@mui/material'
import PageSection from '@/components/PageSection'
import { useIntl } from 'react-intl'
import ScrollableCardSection from './ScrollableCardsSection'

export default function OurServices() {
  const { formatMessage: f } = useIntl()

  return (
    <PageSection
      id="our-services"
      bgImage="/images/our-services/bg.png"
      bgRotation="rotate(-180deg)"
      bgSize="25% auto"
      fades={[
        {
          color: 'rgba(27, 196, 113, 0.15)',
          position: {
            top: -200,
            left: 0,
            transform: 'translate(-25%, -25%)',
          },
        },
        {
          color: 'rgba(27, 196, 113, 0.15)',
          position: {
            top: '50%',
            right: 0,
            transform: 'translate(25%, -50%)',
          },
        },
        {
          color: 'rgba(220, 36, 60, 0.15)',
          position: {
            top: '50%',
            left: 0,
            transform: 'translate(-25%, -50%)',
          },
        },
      ]}
      sx={{ position: 'relative', zIndex: 1 }}
    >
      <Stack spacing={{ xs: 2, md: 3, lg: 4 }} justifyContent="center" alignItems="center">
        <Typography
          variant="subtitle1"
          fontSize={{ xs: 28, md: 32 }}
          color="primary"
          sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
        >
          {f({ id: 'educationalServicesTitle' })}
        </Typography>
        <ScrollableCardSection />
      </Stack>
    </PageSection>
  )
}
