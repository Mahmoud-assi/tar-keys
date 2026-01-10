import React, { forwardRef } from 'react'
import { Box, Container, Stack, type SxProps, type Theme } from '@mui/material'

export interface FadeConfig {
  color: string
  position?: SxProps<Theme>
  size?: number
  sx?: SxProps<Theme>
}

export interface PageSectionProps {
  id?: string
  children: React.ReactNode
  bgImage?: string
  bgOpacity?: number
  bgRotation?: string
  bgSize?: string
  fades?: FadeConfig[]
  sx?: SxProps<Theme>
}

const PageSection = forwardRef<HTMLDivElement, PageSectionProps>(
  (
    {
      id,
      children,
      bgImage,
      bgOpacity = 0.05,
      bgRotation = 'rotate(90deg)',
      bgSize = '50% auto',
      fades = [],
      sx,
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        id={id}
        ref={ref}
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: 'calc(100dvh - 56px)',
          overflow: 'hidden',
          /* 
             BACKGROUND IMAGE LOGIC 
             1. Uses the `bgImage` url.
             2. Uses `bgRotation` to rotate the pattern (e.g., rotate(-180deg)).
             3. Uses `bgRepeat: repeat` to tile the image.
          */
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: bgImage ? `url(${bgImage})` : 'none',
            backgroundSize: bgSize,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center center',
            opacity: bgOpacity,
            zIndex: 0,
            pointerEvents: 'none',
            transform: bgRotation,
          },
          ...sx,
        }}
        {...props}
      >
        <Container
          maxWidth={false}
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            py: 5,
            px: { xs: 2, sm: 3, md: 4, lg: 5 },
          }}
        >
          <Stack height="100%" width="100%" justifyContent="center" spacing={{ xs: 2, md: 3 }}>
            {children}
          </Stack>
        </Container>

        {/* Render Fades with fixed Type Logic */}
        {fades.map((fade, index) => (
          <Box
            key={index}
            sx={
              [
                {
                  position: 'absolute',
                  width: fade.size || 600,
                  height: fade.size || 600,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${fade.color} 0%, rgba(255, 255, 255, 0) 70%)`,
                  filter: 'blur(80px)',
                  zIndex: 0,
                  pointerEvents: 'none',
                },
                fade.position,
                fade.sx,
              ].filter(Boolean) as SxProps<Theme>
            }
          />
        ))}
      </Box>
    )
  },
)

PageSection.displayName = 'PageSection'

export default PageSection
