import Icon from './Icon.vue';

const Default = (args) => {
  return {
    components: { Icon },
    setup() {
      return { args };
    },
    template: `<Icon v-bind="args" />`,
  };
};

const defaultArgs = {
  name: {
    control: {
      type: 'text',
    },
    defaultValue: 'face',
  },
  size: {
    control: {
      type: 'text',
    },
    defaultValue: '24',
  },
  color: {
    control: {
      type: 'color',
    },
    defaultValue: '',
  },
  kind: {
    control: {
      type: 'radio',
      options: ['filled', 'round', 'outlined', 'sharp', 'two-tone'],
    },
    defaultValue: 'round',
    table: {
      defaultValue: {
        summary: 'filled',
        detail: 'filled | round | outlined | sharp | two-tone',
      },
    },
    description: 'Kinds of icon',
  },
  fontWeight: {
    control: {
      type: 'radio',
      options: ['light', 'bold'],
    },
    defaultValue: 'light',
  },
};

export default {
  title: 'Components/Icon',
  component: Icon,

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

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    name: 'face',
  },
};

export const Defaultt = {
  render: Default.bind({}),

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    name: 'face',
  },
};
