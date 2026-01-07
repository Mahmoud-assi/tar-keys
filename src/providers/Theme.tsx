import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { useMemo, type PropsWithChildren } from 'react'
import { colorSchemes, typography, shadows, shape } from '@/theme/themePrimitives'
import { Global } from '@emotion/react'
import GlobalStyles from '@/theme/global'

export default function AppTheme({ children }: PropsWithChildren) {
  const theme = useMemo(() => {
    return createTheme({
      cssVariables: {
        colorSchemeSelector: 'class',
        cssVarPrefix: '',
      },
      colorSchemes,
      typography,
      shadows,
      shape,
    })
  }, [])

  return (
    <ThemeProvider theme={theme} noSsr disableTransitionOnChange defaultMode="system">
      <CssBaseline />
      <Global styles={GlobalStyles(theme)} />
      {children}
    </ThemeProvider>
  )
}
