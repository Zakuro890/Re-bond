/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      violet: colors.violet,
      'baseBlue':'#2859C5',
      'level1':'#3EC60F',
      'level2':'#0EBAE0',
      'level3':'#2859C5',
      'level4':'#A42DB8',
      'level5':'#DD041E',
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-inner-border"),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}

