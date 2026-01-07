import { alpha, styled, Box, type Theme, type SxProps } from '@mui/material'
import SimpleBar from 'simplebar-react'
import { BrowserView, MobileView } from 'react-device-detect'
import type { ComponentProps } from 'react'

export default function SimpleBarScroll({
  children,
  sx,
  simplebarProps,
}: {
  children: React.ReactNode
  sx?: SxProps<Theme>
  simplebarProps?: ComponentProps<typeof SimpleBar>
}) {
  return (
    <>
      <RootStyle>
        <SimpleBarStyle
          clickOnTrack={false}
          sx={sx}
          data-simplebar-direction="ltr"
          {...simplebarProps}
        >
          {children}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <Box sx={{ overflowX: 'auto', ...sx }}>{children}</Box>
      </MobileView>
    </>
  )
}

const RootStyle = styled(BrowserView)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
})

const SimpleBarStyle = styled(SimpleBar)(({ theme }: { theme: Theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      background: alpha(theme.palette.grey[500], 0.48),
      ...theme.applyStyles('dark', { background: alpha(theme.palette.grey[200], 0.48) }),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track': {
    '&.simplebar-vertical': {
      width: 10,
    },
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}))
