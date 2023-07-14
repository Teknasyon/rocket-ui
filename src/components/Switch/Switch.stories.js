import { action } from '@storybook/addon-actions';
import Switch from './Switch.vue';

const Default = (args) => {
  return {
    components: { Switch },
    setup() {
      return {
        args,
        change: action('update:modelValue'),
      };
    },
    template: `<Switch v-bind="args" @update:modelValue="change"/>`,
  };
};

const defaultArgs = {
  id: {
    control: {
      type: 'text',
    },
    defaultValue: 'switch',
  },
  modelValue: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    defaultValue: 'medium',
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  label: {
    control: {
      type: 'text',
    },
    defaultValue: 'Switch',
  },
  hint: {
    control: {
      type: 'text',
    },
    defaultValue:
      'A control used to switch between two states: often on or off.',
  },
};

export default {
  title: 'Components/Switch',
  component: Switch,

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
    modelValue: false,
    size: 'small',
  },
};

export const Small = {
  render: Default.bind({}),
  name: 'Small',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    modelValue: false,
    size: 'small',
  },
};

export const Medium = {
  render: Default.bind({}),
  name: 'Medium',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    modelValue: false,
    size: 'medium',
  },
};

export const Large = {
  render: Default.bind({}),
  name: 'Large',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    modelValue: false,
    size: 'large',
  },
};

export const WithError = {
  render: Default.bind({}),
  name: 'With Error',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    modelValue: false,
    size: 'medium',
    errorMsg: 'This is an error message',
  },
};
