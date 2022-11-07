/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
/* eslint-env node */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Albert', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        neutral: {
          100: '#F6F7F9',
          200: '#E7EAEE',
          300: '#C3C9D5',
          400: '#ACB4C3',
          500: '#818A9C',
          600: '#586174',
          700: '#3C4353',
          800: '#242A38',
          900: '#151B26',
        },
        info: {
          100: '#E8F5FF',
          200: '#CCEBFF',
          300: '#66D1FF',
          400: '#33C3FF',
          500: '#00B5FF',
          600: '#0099CC',
          700: '#007299',
          800: '#004D66',
          900: '#003D4D',
        },
        success: {
          100: '#E8FFF7',
          200: '#BFFFE8',
          300: '#97FFDA',
          400: '#1BF5A7',
          500: '#05CC85',
          600: '#0CBC7D',
          700: '#068E03',
          800: '#007A4F',
          900: '#005235',
        },
        warning: {
          100: '#FDFAE7',
          200: '#F9EEB5',
          300: '#FFEC8A',
          400: '#FFDF3B',
          500: '#EBC80F',
          600: '#E0BC00',
          700: '#998100',
          800: '#705E00',
          900: '#483C00',
        },
        danger: {
          100: '#FFECEB',
          200: '#FFD0CC',
          300: '#FF9891',
          400: '#FF4537',
          500: '#E13023',
          600: '#BF1E12',
          700: '#9D1006',
          800: '#7B0900',
          900: '#590600',
        },
      },
    },
  },
  plugins: [],
};
