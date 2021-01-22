const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        green: colors.green,
        emerald: colors.emerald,
        rose: colors.rose,
        beige: '#a0816c',
        beigeh: '#d1c0a8',
        beigehh: '#bfaa8c'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
