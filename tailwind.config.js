const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
        green: colors.green,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        teal: colors.teal,
        yellow: colors.yellow,
      },
      fontFamily: {
        "lato": ["Lato",],
        "lora": ["Lora",],
        "merri": ["Merriweather",],
        "mont": ["Montserrat",],
        "open": ["OpenSans",],
        "play": ["Playfair",],
        "rale": ["Raleway",],
        "bot": ["Roboto",],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
