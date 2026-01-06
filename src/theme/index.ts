import { createTheme } from '@mui/material'
import type { LocaleType, ThemeMode } from '@/types/custom'
import { components } from './core/components'
import { typography } from './core/typography'
import { setFont } from '@/utils/font'

export const theme = (mode: ThemeMode, locale: LocaleType) =>
  createTheme({
    direction: locale === 'ar' ? 'rtl' : 'ltr',
    palette: {
      primary: {
        light: mode === 'dark' ? '#2563EB' : '#60A5FA',
        main: '#2563EB',
        dark: mode === 'dark' ? '#60A5FA' : '#1D4ED8',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: mode === 'dark' ? '#64748B' : '#94A3B8',
        main: '#64748B',
        dark: mode === 'dark' ? '#94A3B8' : '#475569',
        contrastText: '#FFFFFF',
      },
      background: {
        default: mode === 'dark' ? '#0A1929' : '#F8FAFC',
        paper: mode === 'dark' ? '#1E293B' : '#FFFFFF',
        paperHover: mode === 'dark' ? '#334155' : '#F1F5F9',
        sidebar: mode === 'dark' ? '#0D1B2A' : '#FFFFFF',
        white: mode === 'dark' ? '#172A3A' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#F1F5F9' : '#0F172A',
        secondary: mode === 'dark' ? '#94A3B8' : '#475569',
        tertiary: mode === 'dark' ? '#64748B' : '#64748B',
      },
    },
    typography: {
      ...typography,
      fontFamily: setFont(locale === 'ar' ? 'Noto Sans Arabic' : 'Lato'),
    },
    components,
  })
