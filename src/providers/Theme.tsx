import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMemo, type PropsWithChildren } from 'react'
import { colorSchemes, typography, shadows, shape } from '@/theme/themePrimitives'
import { Global } from '@emotion/react'
import GlobalStyles from '@/theme/global'
import { CssBaseline } from '@mui/material'

export default function AppTheme({ children }: PropsWithChildren) {
  const theme = useMemo(() => {
    return createTheme({
      // For more about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
      cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: '',
      },
      colorSchemes,
      typography,
      shadows,
      shape,
    })
  }, [])

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange defaultMode="system">
      <CssBaseline />
      <Global styles={GlobalStyles(theme)} />
      {children}
    </ThemeProvider>
  )
}
