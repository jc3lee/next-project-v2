const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      fontFamily: {
        "open": ["OpenSans",],
        "play": ["Playfair",],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
