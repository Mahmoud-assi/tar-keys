import {
  Box,
  Container,
  Grid,
  Link,
  linkClasses,
  Stack,
  svgIconClasses,
  Typography,
  typographyClasses,
} from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { useMemo, type ReactNode } from 'react'
import { useIntl, type IntlShape } from 'react-intl'

export default function Footer() {
  const { formatMessage: f } = useIntl()

  const contactInfo = useMemo(
    () => [
      { label: f({ id: 'downloadApp' }), href: '' },
      {
        label: f({ id: 'aboutUs' }),
        href: '',
      },
      { label: f({ id: 'ourServices' }), href: '' },
    ],
    [f],
  )

  const supportInfo = useMemo(
    () => [
      { label: f({ id: 'contactSupport' }), href: '' },
      {
        label: f({ id: 'privacyPolicy' }),
        href: '',
      },
      { label: f({ id: 'termsOfUse' }), href: '' },
    ],
    [f],
  )

  const socialMediatInfo = useMemo(
    () => [
      { label: '+963 999 999 999', href: '+963 999 999 999' },
      {
        label: 'support@tarkeys.com',
        href: 'support@tarkeys.com',
      },
    ],
    [],
  )

  return (
    <Box
      component="footer"
      width="100%"
      bgcolor="primary.main"
      py={3}
      minHeight={200}
      sx={{ borderTop: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FooterBrand f={f} />
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 9 }}>
            <Grid
              container
              spacing={3}
              justifyContent={{ xs: 'start', sm: 'center', md: 'start' }}
              alignItems={{ xs: 'start', sm: 'center', md: 'start' }}
            >
              <Grid size={{ xs: 6, sm: 4, lg: 3 }}>
                <LinkColumn title={f({ id: 'mainSections' })} links={contactInfo} />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, lg: 3 }}>
                <LinkColumn title={f({ id: 'support' })} links={supportInfo} />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, lg: 3 }}>
                <LinkColumn title={f({ id: 'socialMedia' })} links={socialMediatInfo} />
              </Grid>
              <Grid size={{ xs: 6, sm: 4, lg: 3 }}>
                <LinkColumn title={f({ id: 'mainSections' })} links={socialMediatInfo} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function FooterBrand({ f }: { f: IntlShape['formatMessage'] }) {
  return (
    <Stack
      spacing={2}
      justifyContent={{ xs: 'center', md: 'start' }}
      alignItems={{ xs: 'center', md: 'start' }}
      maxWidth={{ xs: '100%', md: 250 }}
    >
      <Box component="img" src="/images/logo-with-text.png" sx={{ width: 218, height: '100%' }} />
      <Stack
        spacing={1}
        alignItems={{ xs: 'center', md: 'start' }}
        sx={{ [`.${typographyClasses.root}`]: { textAlign: { xs: 'center', md: 'justify' } } }}
      >
        <Typography variant="body1" color="common.white" lineHeight="120%">
          {f({ id: 'platformDescription' })}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          color="common.white"
          lineHeight="160%"
        >
          <CopyrightIcon fontSize="small" />
          <Typography variant="caption" textAlign="justify" fontWeight={300}>
            {f({ id: 'rightsReserved' })}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; icon?: ReactNode }[]
}) {
  return (
    <Stack spacing={2}>
      <Typography variant="body2" color="common.white">
        {title}
      </Typography>
      {links.map((link, index) => (
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          key={index}
          sx={{
            cursor: 'pointer',
            [`.${svgIconClasses.root}`]: { color: 'var(--palette-primary-main)' },
            [`.${linkClasses.root}`]: {
              color: 'common.white',
              textDecoration: 'none',
              transition: 'color .3s ease',
            },
            '&:hover': {
              [`.${linkClasses.root}`]: {
                color: 'var(--palette-secondary-main)',
              },
              [`.${svgIconClasses.root}`]: { color: 'var(--palette-primary-dark)' },
            },
          }}
        >
          {link?.icon && link?.icon}
          <Link href={link.href} variant="caption">
            {link.label}
          </Link>
        </Stack>
      ))}
    </Stack>
  )
}
