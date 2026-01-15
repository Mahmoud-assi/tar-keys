import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material'
import { motion } from 'framer-motion'
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
    <>
      <Box
        component={motion.div}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, pointerEvents: 'auto', transition: { duration: 0.2 } },
          hidden: { opacity: 0, pointerEvents: 'none', transition: { duration: 0.2 } },
        }}
        onClick={toggle}
        sx={{
          position: 'fixed',
          inset: `${APPBAR_HEIGHT}px 0 0 0`,
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: theme => theme.zIndex.drawer,
        }}
      />

      <Box
        component={motion.aside}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { x: 0, transition: { stiffness: 300, damping: 30 } },
          closed: { x: 300, transition: { stiffness: 300, damping: 40 } },
        }}
        sx={{
          position: 'fixed',
          top: 0,
          ldft: 0,
          bottom: 0,
          width: 275,
          bgcolor: 'background.paper',
          zIndex: theme => theme.zIndex.drawer + 1,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <Stack spacing={6}>
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
              <List
                component={motion.ul}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                  open: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
                style={{ paddingLeft: 0, margin: 0 }}
              >
                {appbarNavigations.map(item => {
                  const active = activeSection === item.path.replace('#', '')
                  return (
                    <motion.div
                      key={item.path}
                      variants={{
                        open: { opacity: 1, y: 0, transition: { stiffness: 500, damping: 30 } },
                        closed: { opacity: 0, y: 20, transition: { stiffness: 500, damping: 40 } },
                      }}
                      style={{ listStyle: 'none' }}
                    >
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
                    </motion.div>
                  )
                })}
              </List>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
