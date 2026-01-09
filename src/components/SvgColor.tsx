import type { ComponentProps } from 'react'
import { styled, type Theme, type SxProps } from '@mui/material'

export function SvgColor({
  src,
  sx,
  ...other
}: ComponentProps<'span'> & {
  src: string
  sx?: SxProps<Theme>
}) {
  return (
    <SvgRoot
      sx={[
        {
          mask: `url(${src}) no-repeat center / contain`,
          WebkitMask: `url(${src}) no-repeat center / contain`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  )
}

const SvgRoot = styled('span')(() => ({
  width: 24,
  height: 24,
  flexShrink: 0,
  display: 'inline-flex',
  backgroundColor: 'currentColor',
}))
