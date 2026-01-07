import { Box, Collapse, Fade, Grow, Slide, Zoom, type ZoomProps } from '@mui/material'
import type { TransitionProps } from '@mui/material/transitions'
import { forwardRef, type ReactNode } from 'react'

type Position = 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom'
type TransitionType = 'grow' | 'collapse' | 'fade' | 'slide' | 'zoom'

interface TransitionsProps extends Omit<TransitionProps, 'direction'> {
  children: ReactNode
  position?: Position
  type?: TransitionType
  direction?: 'up' | 'right' | 'left' | 'down'
}

const Transitions = forwardRef<HTMLDivElement, TransitionsProps>(
  ({ children, position = 'top-left', type = 'grow', direction = 'up', ...others }, ref) => {
    let positionSX = {
      transformOrigin: '0 0 0',
    }

    switch (position) {
      case 'top-right':
        positionSX = {
          transformOrigin: 'top right',
        }
        break
      case 'top':
        positionSX = {
          transformOrigin: 'top',
        }
        break
      case 'bottom-left':
        positionSX = {
          transformOrigin: 'bottom left',
        }
        break
      case 'bottom-right':
        positionSX = {
          transformOrigin: 'bottom right',
        }
        break
      case 'bottom':
        positionSX = {
          transformOrigin: 'bottom',
        }
        break
      case 'top-left':
      default:
        positionSX = {
          transformOrigin: '0 0 0',
        }
        break
    }

    return (
      <Box ref={ref}>
        {type === 'grow' && (
          <Grow
            {...others}
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150,
            }}
          >
            <Box sx={positionSX}>{children}</Box>
          </Grow>
        )}

        {type === 'collapse' && (
          <Collapse {...others} sx={positionSX}>
            {children}
          </Collapse>
        )}

        {type === 'fade' && (
          <Fade
            {...others}
            timeout={{
              appear: 0,
              enter: 300,
              exit: 150,
            }}
          >
            <Box sx={positionSX}>{children}</Box>
          </Fade>
        )}

        {type === 'slide' && (
          <Slide
            {...others}
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150,
            }}
            direction={direction}
          >
            <Box sx={positionSX}>{children}</Box>
          </Slide>
        )}

        {type === 'zoom' && (
          <Zoom {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Zoom>
        )}
      </Box>
    )
  },
)

export const PopupTransition = forwardRef<unknown, TransitionProps & ZoomProps>((props, ref) => {
  return <Zoom ref={ref} timeout={200} {...props} />
})

PopupTransition.displayName = 'PopupTransition'

export default Transitions
