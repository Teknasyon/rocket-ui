import { create } from '@storybook/theming';

export default create({
  fontBase:
    'Montserrat, "Helvetica Neue", Helvetica, Arial, Tahoma, sans-serif',
  fontCode:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

  colorPrimary: '#6c757d',
  colorSecondary: '#007bff',

  base: 'light',
  brandTitle: 'Rocket UI Vue',
  brandUrl: '/?path=/docs/getting-started--documentation',
  brandTarget: '_self',
  // brandImage: require('./logo.svg'),
});
