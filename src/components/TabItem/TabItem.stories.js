import { action } from '@storybook/addon-actions';
import TabItem from './RTabItem.vue';

const Default = (args) => ({
  components: { TabItem },
  setup() {
    return { args, click: action('select') };
  },
  template: `
    <TabItem v-bind="args" @select="click"/>
  `,
});

const defaultArgs = {
  id: {
    control: {
      type: 'text',
    },
    defaultValue: 'tab-1',
  },
  label: {
    control: {
      type: 'text',
    },
    defaultValue: 'Tab 1',
  },
  icon: {
    control: {
      type: 'text',
    },
    defaultValue: 'home',
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  variant: {
    control: {
      type: 'select',
      options: ['default', 'icon-only', 'text-only'],
    },
    defaultValue: 'default',
  },
  active: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};

export default {
  title: 'Components/TabItem',
  component: TabItem,

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
    variant: 'default',
  },
};

export const Defaultt = {
  render: Default.bind({}),
  name: 'Default',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    variant: 'default',
  },
};

export const IconOnly = {
  render: Default.bind({}),
  name: 'Icon Only',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    variant: 'icon-only',
  },
};

export const TextOnly = {
  render: Default.bind({}),
  name: 'Text Only',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    variant: 'text-only',
  },
};
