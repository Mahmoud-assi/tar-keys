import { css } from '@emotion/react'
import { type Theme, alpha } from '@mui/material'
import '@fontsource/poppins/400.css'
import type { LocaleType } from '@/types/custom'
import { setFont } from '@/utils/font'

export default function GlobalStyles(theme: Theme, locale: LocaleType) {
  return css`
    @font-face {
      font-family: 'Montserrat';
      src: url('/Montserrat-Arabic.ttf') format('truetype');
    }
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background: transparent;
    }
    ::-webkit-scrollbar-track {
      background: linear-gradient(
        45deg,
        ${alpha(theme.palette.grey[200], 0.5)},
        ${alpha(theme.palette.grey[200], 0.1)}
      );
      border-radius: 10px;
      backdrop-filter: blur(10px);
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(
        180deg,
        ${alpha(theme.palette.grey[500], 0.5)},
        ${alpha(theme.palette.grey[600], 0.25)}
      );
      border-radius: 10px;
      border: 2px solid transparent;
      background-clip: padding-box;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    ::-webkit-scrollbar-corner {
      background: linear-gradient(135deg, ${alpha(theme.palette.grey[800], 0.5)}, transparent);
      backdrop-filter: blur(5px);
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 20px;
    }

    :root {
      touch-action: pan-x pan-y;
      height: 100%;
      --scroll-speed: 1;
    }

    * {
      box-sizing: border-box;
    }

    body {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      direction: ltr !important;
      overscroll-behavior: contain;
      margin: 0px !important;
      font-family: ${setFont(locale === 'ar' ? 'Montserrat' : 'Poppins')};
    }
    .embla {
      max-width: 100%;
      margin: auto;
      --slide-spacing: 1rem;
    }
    .embla__viewport {
      overflow: hidden;
      padding-bottom: 4px;
    }
    .embla__container {
      display: flex;
      touch-action: pan-y pinch-zoom;
    }
    .embla__slide {
      transform: translate3d(0, 0, 0);
      padding-left: var(--slide-spacing);
    }
  `
}
