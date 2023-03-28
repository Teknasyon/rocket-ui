const { viteFinalFactory } = require('storybook-design-token/dist/preset');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    './source-panel/manager.js',
    'storybook-design-token',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: viteFinalFactory(),
  webpackFinal: async (config) => {
    config.output.publicPath = '/docs/';
    return config;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = '/docs/';
    return config;
  },
};
