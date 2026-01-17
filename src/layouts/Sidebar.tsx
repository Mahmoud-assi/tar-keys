import {
  alpha,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material'
import { appbarNavigations } from './Appbar'
import routes from '@/router/routes'
import { useRouter } from '@/hooks/useRouter'
import { useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useMemo } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { SvgColor } from '@/components/SvgColor'

const APPBAR_HEIGHT = 56

export default function Sidebar({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  const { formatMessage: f } = useIntl()
  const { replace } = useRouter()
  const { pathname } = useLocation()
  const sectionIds = useMemo(() => appbarNavigations.map(item => item.path.replace('#', '')), [])
  const activeSection = useActiveSection(sectionIds)

  const handleClick = (path: string) => {
    const sectionId = path.replace('#', '')
    if (pathname !== routes.home) replace(`/#${sectionId}`)
    else {
      const element = document.getElementById(sectionId)
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset
        const offset = APPBAR_HEIGHT
        window.scrollTo({ top: topPos - offset, behavior: 'smooth' })
        replace(path)
      }
    }
    toggle()
  }

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggle}
      slotProps={{
        paper: {
          sx: {
            width: 250,
            position: 'relative',
            bgcolor: ({ palette }) => alpha(palette.background.paper, 0.95),
            backdropFilter: 'blur(10px)',
            overflow: 'hidden',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          left: -100,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(220, 36, 60, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(10px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          transform: 'translate(25%, 25%)',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(27, 196, 113, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(10px)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      <Stack spacing={6} sx={{ height: '100%', overflow: 'auto' }}>
        <Box px={3} pt={3}>
          <IconButton
            onClick={toggle}
            size="large"
            sx={{ width: 'max-content', height: 'max-content' }}
          >
            <Box component="img" src="/icons/common/sidebar-closed.svg" />
          </IconButton>
        </Box>
        <Stack spacing={3} alignItems="center">
          <Stack direction="row" alignItems="center" maxWidth="100%">
            <Box component="img" src="/images/logo.png" sx={{ width: 40, height: 40 }} />
            <SvgColor
              src="/icons/layout/logo-text-header.svg"
              sx={{ width: 92, height: 48, color: 'primary.main' }}
            />
          </Stack>
          <Box width="100%">
            <List sx={{ paddingLeft: 0, margin: 0 }}>
              {appbarNavigations.map(item => {
                const active = activeSection === item.path.replace('#', '')
                return (
                  <Box component="div" key={item.path} sx={{ listStyle: 'none' }}>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleClick(item.path)}>
                        <ListItemText
                          primary={f({ id: item.title })}
                          sx={{
                            color: active ? 'primary.main' : 'grey.400',
                            filter: active
                              ? 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))'
                              : 'none',
                            textAlign: 'center',
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Box>
                )
              })}
            </List>
          </Box>
        </Stack>
      </Stack>
    </Drawer>
  )
}
