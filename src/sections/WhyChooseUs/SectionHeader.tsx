import { Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'

export default function SectionHeader() {
  const { formatMessage: f } = useIntl()

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Typography
        variant="subtitle1"
        fontSize={{ xs: 28, md: 32 }}
        color="primary"
        sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
      >
        {f({ id: 'whyTarkez' })}
      </Typography>
      <Typography
        fontSize={{ xs: 16, md: 20 }}
        maxWidth={{ xs: '100%', md: '85%' }}
        textAlign="justify"
        sx={{ textAlignLast: 'center' }}
        color="grey.700"
      >
        {f({ id: 'problemDescription' })}{' '}
        <Typography component="span" color="primary" fontSize="inherit">
          {f({ id: 'butWithTarkez' })}
        </Typography>{' '}
        {f({ id: 'becauseWeHave' })}
      </Typography>
    </Stack>
  )
}
