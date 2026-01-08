import { ThemeProvider as MUIThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { useMemo, type PropsWithChildren } from 'react'
import { colorSchemes, typography, shadows, shape } from '@/theme/themePrimitives'
import { Global } from '@emotion/react'
import GlobalStyles from '@/theme/global'
import { useLocale } from './Localization'
import { setFont } from '@/utils/font'
import EmotionCacheProvider from './EmotionCacheProvider'

export function ThemeProvider({ children }: PropsWithChildren) {
  const { locale } = useLocale()

  const theme = useMemo(() => {
    return createTheme({
      cssVariables: {
        colorSchemeSelector: 'class',
        cssVarPrefix: '',
      },
      colorSchemes,
      direction: locale === 'ar' ? 'rtl' : 'rtl',
      typography: {
        ...typography,
        fontFamily: setFont(locale === 'ar' ? 'Montserrat' : 'Poppins'),
      },
      shadows,
      shape,
    })
  }, [locale])

  return (
    <EmotionCacheProvider direction={locale === 'ar' ? 'rtl' : 'ltr'}>
      <MUIThemeProvider theme={theme} noSsr disableTransitionOnChange defaultMode="light">
        <CssBaseline />
        <Global styles={GlobalStyles(theme, locale)} />
        {children}
      </MUIThemeProvider>
    </EmotionCacheProvider>
  )
}
