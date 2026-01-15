import { Box, Stack } from '@mui/material'
import Appbar from './Appbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'

const APPBAR_HEIGHT = 56

export default function Layout({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(prev => !prev)

  return (
    <Box sx={{ maxWidth: '100vw', minHeight: '100dvh' }}>
      <Appbar isOpen={isOpen} toggle={handleToggle} />
      <Sidebar isOpen={isOpen} toggle={handleToggle} />
      <Stack
        component="main"
        sx={{
          maxWidth: '100%',
          minHeight: `calc(100dvh - ${APPBAR_HEIGHT}px)`,
        }}
      >
        <Box
          display="grid"
          sx={{
            width: '100%',
            minHeight: `calc(100dvh - ${APPBAR_HEIGHT}px)`,
          }}
        >
          {children}
        </Box>
      </Stack>
      <Footer />
    </Box>
  )
}
