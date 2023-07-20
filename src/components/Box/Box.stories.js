// import { action } from '@storybook/addon-actions';
import Box from './RBox.vue';

const Default = (args) => ({
  components: { Box },
  setup() {
    return { args };
  },
  template: `<Box v-bind="args">
  hello world
  </Box>`,
});

const defaultArgs = {
  is: {
    control: {
      type: 'select',
      options: ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    defaultValue: 'div',
  },
  display: {
    control: {
      type: 'select',
      options: [
        'block',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'table',
        'inline-table',
        'contents',
        'list-item',
        'none',
      ],
    },
    defaultValue: 'block',
  },
  width: {
    control: {
      type: 'text',
    },
    defaultValue: 'auto',
  },
  height: {
    control: {
      type: 'text',
    },
    defaultValue: 'auto',
  },
  minWidth: {
    control: {
      type: 'text',
    },
    defaultValue: 'auto',
  },
  minHeight: {
    control: {
      type: 'text',
    },
    defaultValue: 'auto',
  },
  maxWidth: {
    control: {
      type: 'text',
    },
    defaultValue: 'auto',
  },
  maxHeight: {
    control: {
      type: 'text',
    },
    defaultValue: 'auto',
  },
};

export default {
  title: 'Layout/Box',
  component: Box,

  argTypes: {
    ...defaultArgs,
  },

  parameters: {
    viewMode: 'docs',
  },
};

export const Overview = {
  render: Default.bind({}),
  name: 'Overview',

  argTypes: {
    ...Default.argTypes,
  },

  args: {},
};
