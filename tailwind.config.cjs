/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{css}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
