/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      dark: colors.slate[950],
      darkLight: colors.slate[900],
      darkLightBorder: colors.slate[800],
      grayDark: colors.slate[600],
      gray: colors.slate[400],
      grayLight: colors.slate[300],
      light: colors.slate[200],
      primary: colors.sky[600],
      success: '#27C485',
      warning: '#F1B650',
      error: colors.red[800],
    },
    extend: {
      fontSize: {
        base: ['18px', '24px'],
        small: ['16px', '20px'],
      },
      fontFamily: {
        sans: ['inter', ...fontFamily.sans],
      },
      animation: {
        'pulse-fast': 'pulse 0.6s linear infinite',
      },
    },
  },
  plugins: [
    ({ addBase, theme }) => {
      const extractColorVars = (colorObj, colorGroup = '') =>
        Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]
          const newVars =
            typeof value === 'string'
              ? { [`--tw${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})

      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    },
  ],
}
