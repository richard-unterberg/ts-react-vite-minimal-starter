// uno.config.ts
import { colors } from '@unocss/preset-wind'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      dark: colors.slate[950], // '#020617'
      darkLight: colors.slate[900],
      darkLightBorder: colors.slate[800],
      grayDark: colors.slate[600],
      gray: colors.slate[400],
      grayLight: colors.slate[300],
      light: colors.slate[200],
      primary: colors.sky[600],
      strava: '#fc4c02',
      success: '#27C485',
      warning: '#F1B650',
      error: colors.red[500],
    },
    fontSize: {
      base: ['18px', '24px'],
      small: ['16px', '20px'],
      micro: ['10px', '12px'],
    },
    fontFamily: {
      sans: 'Noto Sans, sans-serif',
    },
  },
  rules: [
    [
      'spin-slow',
      {
        animation: 'spin 6s linear infinite',
      },
    ],
    [
      'spin-fast',
      {
        animation: 'spin 2s linear infinite',
      },
    ],
  ],
  preflights: [
    {
      getCSS: ({ theme }) => {
        let cssVariables = ''

        if (theme.colors) {
          Object.keys(theme.colors).forEach(color => {
            if (typeof theme.colors?.[color] === 'string') {
              cssVariables += `--color-${color}: ${theme.colors?.[color]};\n`
            }
          })
        }

        return `
          body, html {
            background-color: ${theme.colors?.dark};
          }
          :root {
            ${cssVariables}
          }

          @keyframes spin {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
        `
      },
    },
  ],
})
