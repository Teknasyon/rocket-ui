/* eslint-env node */
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nested',
    tailwindcss: { config: './tailwind.config.cjs' },
    autoprefixer: {},
  },
};
