/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['CustomFont']
      },
      colors: {
        'custom-gray': '#141414'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

