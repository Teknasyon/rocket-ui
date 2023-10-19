import type { Meta, StoryObj } from '@storybook/vue3';
import Switch from './RSwitch.vue';

const DefaultArgTypes = {
  size: {
    type: 'select',
    options: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
};

const DefaultArgs = {
  id: 'switch',
  modelValue: false,
  size: 'medium',
  disabled: false,
  label: 'Switch',
  hint: 'A control used to switch between two states: often on or off.',
  errorMsg: '',
  reverse: false,
};

const SwitchStory = {
  title: 'Form/Switch',
  component: Switch,
  setup(args: typeof Switch) {
    return {
      args,
    };
  },
  template: '<Switch v-bind="args"/>',
  args: DefaultArgs,
  argTypes: {
    ...DefaultArgTypes,
    'onUpdate:modelValue': {
      action: 'update:modelValue',
    },
  },
} as Meta<typeof Switch>;

export default SwitchStory;

type Story = StoryObj<typeof SwitchStory>;

export const Overview: Story = {
  args: {
    modelValue: false,
    size: 'small',
  },
};

export const Small: Story = {
  args: {
    modelValue: false,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    modelValue: false,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    modelValue: false,
    size: 'large',
  },
};

export const WithError: Story = {
  args: {
    modelValue: false,
    size: 'medium',
    errorMsg: 'This is an error message',
  },
};

export const Reverse: Story = {
  args: {
    modelValue: false,
    size: 'medium',
    reverse: true,
  },
};
