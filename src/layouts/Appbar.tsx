import AnimateButton from '@/components/AnimateButton'
import { useScrollOffsetTop } from '@/hooks/useScrollOffsetTop'
import {
  AppBar,
  Container,
  styled,
  alpha,
  Stack,
  Box,
  Button,
  type AppBarProps,
} from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import type { AppbarKey } from '@/types/custom'
import AppbarNavItem from './AppbarNavItem'
import { SvgColor } from '@/components/SvgColor'
import MenuToggle from './MenuToggle'

export default function Appbar() {
  const { formatMessage: f } = useIntl()
  const { offsetTop: isOffset } = useScrollOffsetTop()
  const [isOpen, setIsOpen] = useState(false)
  const sectionIds = useMemo(() => appbarNavigations.map(item => item.path.replace('#', '')), [])
  const activeSection = useActiveSection(sectionIds)
  const handleToggle = () => setIsOpen(prev => !prev)

  return (
    <AppbarRoot position="sticky" component="header" isOffset={isOffset}>
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
        }}
      >
        <Box
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
          }}
        >
          <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
            <Stack direction="row" alignItems="center" maxWidth={132}>
              <Box component="img" src="/images/logo.png" sx={{ width: 40, height: 40 }} />
              <SvgColor
                src="/icons/layout/logo-text-header.svg"
                sx={{ width: 92, height: 48, color: 'primary.main' }}
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                '@media (max-width: 992px)': {
                  display: 'none',
                },
              }}
            >
              {appbarNavigations.map(item => {
                const active = activeSection === item.path.replace('#', '')
                return <AppbarNavItem key={item.title} item={item} isActive={active} />
              })}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AnimateButton scale={{ hover: 1.05, tap: 0.9 }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    color: 'secondary.main',
                  }}
                >
                  {f({ id: 'contactSupport' })}
                </Button>
              </AnimateButton>
              <MenuToggle toggle={handleToggle} isOpen={isOpen} />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </AppbarRoot>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const appbarNavigations: {
  title: AppbarKey
  path: string
}[] = [
  { title: 'home', path: '#home' },
  { title: 'whyUs', path: '#whyUs' },
  { title: 'ourService', path: '#our-service' },
  { title: 'exploreTarkeys', path: '#explore-tarkeys' },
  { title: 'frequentlyQuestions', path: '#faq' },
  { title: 'views', path: '#views' },
]

const AppbarRoot = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'isOffset',
})<AppBarProps & { isOffset: boolean }>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  top: 0,
  backgroundImage: 'none',
  height: 56, // Fixed height
  width: '100%',
  color: 'inherit',
  zIndex: 1200, // Ensure it is above content
  transition: theme.transitions.create(['box-shadow', 'background-color', 'backdrop-filter'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  variants: [
    {
      props: ({ isOffset }) => !isOffset,
      style: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        backdropFilter: 'none',
      },
    },
    {
      props: ({ isOffset }) => isOffset,
      style: {
        boxShadow: '0px 4px 16px 0px #00000014',
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: 'blur(10px)',
      },
    },
  ],
}))
