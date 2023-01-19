/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
/* eslint-env node */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Albert Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
