import {
  Box,
  Container,
  Grid,
  Link,
  linkClasses,
  Stack,
  svgIconClasses,
  Typography,
} from '@mui/material'
// import CopyrightIcon from '@mui/icons-material/Copyright'
import type { ReactNode } from 'react'
import { useIntl } from 'react-intl'

export default function Footer() {
  const { formatMessage: f } = useIntl()

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
          sx={{ width: '100%' }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              spacing={2}
              justifyContent={{ xs: 'center', md: 'start' }}
              alignItems={{ xs: 'center', md: 'start' }}
              maxWidth={250}
            >
              <Box
                component="img"
                src="/images/logo-with-text.png"
                sx={{ width: 218, height: '100%' }}
              />
              <Typography variant="body1" color="common.white" textAlign="justify">
                {f({ id: 'platformDescription' })}
              </Typography>
              <Stack direction="row" alignItems="center">
                {/* <CopyrightIcon /> */}
                <Typography variant="caption" textAlign="justify">
                  {f({ id: 'rightsReserved' })}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const LinkColumn = ({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string; icon?: ReactNode }[]
}) => (
  <Stack spacing={2}>
    <Typography variant="subtitle1">{title}</Typography>
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
            color: 'text.secondary',
            textDecoration: 'none',
          },
          '&:hover': {
            [`.${linkClasses.root}`]: {
              color: 'text.primary',
            },
            [`.${svgIconClasses.root}`]: { color: 'var(--palette-primary-dark)' },
          },
        }}
      >
        {link?.icon && link?.icon}
        <Link href={link.href} variant="body2">
          {link.label}
        </Link>
      </Stack>
    ))}
  </Stack>
)
