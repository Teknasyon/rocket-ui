import { action } from '@storybook/addon-actions';

import Chip from './RChip.vue';

const Default = (args) => ({
  components: { Chip },
  setup() {
    return {
      args,
      clickChip: action('click:chip'),
      clickClose: action('click:close'),
    };
  },
  template: `
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  `,
});

const defaultArgs = {
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    defaultValue: 'primary',
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    defaultValue: 'medium',
  },
  label: {
    control: {
      type: 'text',
    },
    defaultValue: 'Chip',
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  prependIcon: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  appendIcon: {
    control: {
      type: 'text',
    },
    defaultValue: 'close',
  },
  ghost: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};

export default {
  title: 'Components/Chips',
  component: Chip,

  argTypes: {
    ...defaultArgs,
  },

  parameters: {
    viewMode: 'docs',
    layout: 'centered',
  },
};

export const Overview = {
  render: Default.bind({}),
  name: 'Overview',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    prependIcon: 'face',
  },
};

export const Primary = {
  render: Default.bind({}),
  name: 'Primary',

  argTypes: {
    ...Default.argTypes,
  },

  args: {},
};

export const Secondary = {
  render: Default.bind({}),
  name: 'Secondary',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    variant: 'secondary',
  },
};

export const Success = {
  render: Default.bind({}),
  name: 'Success',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    variant: 'success',
  },
};

export const Error = {
  render: Default.bind({}),
  name: 'Error',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    variant: 'error',
  },
};

export const Warning = {
  render: Default.bind({}),
  name: 'Warning',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    variant: 'warning',
  },
};

export const Info = {
  render: Default.bind({}),
  name: 'Info',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    variant: 'info',
  },
};
