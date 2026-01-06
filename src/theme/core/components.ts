import { alpha, type Components, type Theme } from '@mui/material'

const MuiBackdrop: Components<Theme>['MuiBackdrop'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.grey[900], 0.8),
    }),
    invisible: {
      background: 'transparent',
    },
  },
}

const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    variant: 'contained',
  },
  styleOverrides: {
    containedInherit: ({ theme }) => ({
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[800],
      '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[800],
      },
    }),
    sizeLarge: {
      minHeight: 48,
    },
  },
}

const MuiLink: Components<Theme>['MuiLink'] = {
  defaultProps: { underline: 'hover' },
}

const MuiSkeleton: Components<Theme>['MuiSkeleton'] = {
  defaultProps: { animation: 'wave' },
}

const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body2,
      minHeight: 32,
    }),
  },
}

export const components = {
  MuiLink,
  MuiButton,
  MuiBackdrop,
  MuiMenuItem,
  MuiSkeleton,
}
