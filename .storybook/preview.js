import { withSource, transformSource } from './withSource';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  // layout: 'centered', we must do this in MDX files
  docs: {
    transformSource,
  },
};

export const decorators = [withSource];
