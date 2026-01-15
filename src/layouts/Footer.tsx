import {
  Box,
  Button,
  buttonClasses,
  Container,
  Grid,
  IconButton,
  Link as MuiLink,
  linkClasses,
  Stack,
  svgIconClasses,
  Typography,
  typographyClasses,
  useMediaQuery,
  type StackProps,
} from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { useNavigate } from 'react-router-dom'
import { useMemo, type ReactNode } from 'react'
import { useIntl, type IntlShape } from 'react-intl'
import AnimateButton from '@/components/AnimateButton'
import { SvgColor } from '@/components/SvgColor'
import routes from '@/router/routes'

export default function Footer() {
  const { formatMessage: f } = useIntl()

  const contactInfo = useMemo(
    () => [
      { label: f({ id: 'downloadApp' }), href: '' },
      { label: f({ id: 'aboutUs' }), href: '' },
      { label: f({ id: 'ourServices' }), href: '' },
    ],
    [f],
  )

  const supportInfo = useMemo(
    () => [
      { label: f({ id: 'contactSupport' }), href: '' },
      { label: f({ id: 'privacyPolicy' }), href: routes.privacyPolicy },
      { label: f({ id: 'termsOfUse' }), href: routes.termsOfuse },
    ],
    [f],
  )

  const socialMediatInfo = useMemo(
    () => [
      {
        label: '+963 999 999 999',
        href: '+963 999 999 999',
        icon: <SvgColor src="/icons/common/headset-help.svg" />,
      },
      {
        label: 'support@tarkeys.com',
        href: 'support@tarkeys.com',
        icon: <SvgColor src="/icons/common/mail.svg" />,
      },
    ],
    [],
  )

  return (
    <Box
      component="footer"
      width="100%"
      bgcolor="primary.main"
      py={{ xs: 5, md: 3 }}
      minHeight={200}
      sx={{ borderTop: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ width: '100%' }}
        >
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FooterBrand f={f} />
          </Grid>
          <Grid display={{ xs: 'flex', md: 'none' }} size={{ xs: 12, md: 4, lg: 3 }}>
            <StoreDownloadButtons f={f} direction={{ xs: 'column', sm: 'row' }} />
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 9 }}>
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              justifyContent={{ xs: 'center', sm: 'space-between', md: 'start' }}
              alignItems="flex-start"
            >
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkColumn title={f({ id: 'mainSections' })} links={contactInfo} />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <LinkColumn title={f({ id: 'support' })} links={supportInfo} />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                  <Stack spacing={2} alignItems={{ xs: 'center', sm: 'start' }}>
                    <LinkColumn title={f({ id: 'socialMedia' })} links={socialMediatInfo} />
                    <Stack
                      spacing={1.5}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      {[
                        { icon: 'facebook' },
                        { icon: 'instagram' },
                        { icon: 'youtube' },
                        { icon: 'whatsapp' },
                        { icon: 'telegram' },
                      ].map(({ icon }) => (
                        <AnimateButton type="scale" scale={{ hover: 1.05, tap: 0.85 }} key={icon}>
                          <IconButton size="small" sx={{ p: 0, img: { width: 36, height: 36 } }}>
                            <Box component="img" src={`/icons/common/${icon}.svg`} />
                          </IconButton>
                        </AnimateButton>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid display={{ xs: 'none', md: 'flex' }} size={{ xs: 12, sm: 6, lg: 3 }}>
                <StoreDownloadButtons f={f} />
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
      sx={{ width: '100%' }}
    >
      <Box
        component="img"
        src="/icons/layout/logo-with-text.svg"
        sx={{
          width: 218,
          height: 'auto',
          maxWidth: '100%',
        }}
      />
      <Stack
        spacing={1}
        alignItems={{ xs: 'center', md: 'start' }}
        sx={{
          width: '100%',
          textAlign: { xs: 'center', md: 'left' },
          [`.${typographyClasses.root}`]: {
            textAlign: { xs: 'center', md: 'left' },
          },
        }}
      >
        <Typography variant="body1" color="common.white" lineHeight="150%">
          {f({ id: 'platformDescription' })}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          color="common.white"
          lineHeight="160%"
        >
          <CopyrightIcon fontSize="small" sx={{ mt: 0.5 }} />
          <Typography variant="caption" fontWeight={300}>
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
  const navigate = useNavigate()

  const handleClick = (href: string) => {
    if (!href) return
    
    if (href.startsWith('/')) {
      navigate(href)
    } else if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      // Handle mailto and tel links
      const link = document.createElement('a')
      link.href = href
      link.click()
    } else {
      // Handle external links
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Stack spacing={1.25} alignItems={{ xs: 'center', sm: 'start' }}>
      <Typography variant="body2" color="grey.300" textAlign="left">
        {title}
      </Typography>
      {links.map((link, index) => (
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          key={index}
          onClick={() => handleClick(link.href)}
          sx={{
            cursor: 'pointer',
            [`.${svgIconClasses.root}, span`]: {
              color: 'var(--palette-common-white)',
              width: 16,
              height: 16,
              transition: 'color .3s ease',
            },
            [`.${linkClasses.root}`]: {
              color: 'var(--palette-common-white)',
              textDecoration: 'none',
              transition: 'color .3s ease',
            },
            '&:hover': {
              [`.${linkClasses.root}, .${svgIconClasses.root}, span`]: {
                color: 'var(--palette-secondary-main)',
              },
            },
          }}
        >
          {link?.icon && link?.icon}
          <AnimateButton type="slide" offset={1.25}>
            <MuiLink
              component="span"
              variant="caption"
              sx={{ color: 'inherit', cursor: 'pointer' }}
            >
              {link.label}
            </MuiLink>
          </AnimateButton>
        </Stack>
      ))}
    </Stack>
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
  const xs = useMediaQuery(theme => theme.breakpoints.down('sm'))
  return (
    <AnimateButton type="slide" direction="up" offset={1.5}>
      <Button
        variant="contained"
        color="secondary"
        size={xs ? 'medium' : 'large'}
        fullWidth
        endIcon={<Box component="img" src={iconSrc} />}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="body2">{downloadLabel}</Typography>
          <Typography variant="body2">{storeLabel}</Typography>
        </Stack>
      </Button>
    </AnimateButton>
  )
}

function StoreDownloadButtons({
  f,
  ...props
}: { f: IntlShape['formatMessage'] } & Partial<StackProps>) {
  return (
    <Stack
      width="100%"
      spacing={1.5}
      {...props}
      sx={{
        [`.${buttonClasses.root}`]: {
          textTransform: 'capitalize',
          boxShadow: '0px 4px 16px 0px #E1FF0038',
        },
      }}
    >
      <StoreDownloadButton
        iconSrc="/icons/common/google-play.svg"
        downloadLabel={f({ id: 'downloadVia' })}
        storeLabel={f({ id: 'googlePlay' })}
      />
      <StoreDownloadButton
        iconSrc="/icons/common/app-store.svg"
        downloadLabel={f({ id: 'downloadVia' })}
        storeLabel={f({ id: 'appStore' })}
      />
    </Stack>
  )
}
