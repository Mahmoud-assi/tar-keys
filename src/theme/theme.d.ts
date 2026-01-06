/**
 * Palette
 * https://mui.com/customization/palette/
 */
export declare module '@mui/material/styles' {
  interface PaletteColorExtend {
    lighter: string
    darker: string
  }
  export interface TypeBackground {
    paperHover: string
    sidebar: string
    white: string
  }

  interface TypeText {
    tertiary: string
  }
}

/**
 * Typography
 * https://mui.com/customization/typography/
 * @from {@link file://./core/typography.ts}
 */

declare module '@mui/material/styles' {
  interface ThemeVars {
    typography: Theme['typography']
    transitions: Theme['transitions']
  }
}
