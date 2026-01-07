import { Box, Stack } from '@mui/material'
import Appbar from './Appbar'
import Footer from './Footer'
import type { PropsWithChildren } from 'react'
const APPBAR_HEIGHT = 56

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ maxWidth: '100vw', minHeight: '100dvh' }}>
      <Appbar />
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
