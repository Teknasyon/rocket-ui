import { action } from '@storybook/addon-actions';

import Select from './RDropdown.vue';

const Default = (args) => ({
  components: { Select },
  setup() {
    return { args, update: action('update:modelValue') };
  },
  template: `
    <Select v-bind="args" @update:modelValue="update" />
  `,
});

const defaultArgs = {
  options: {
    control: {
      type: 'object',
      required: true,
    },
    defaultValue: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: 'Option 4' },
      { value: '5', label: 'Option 5' },
      { value: '6', label: 'Option 6' },
      { value: '7', label: '7' },
      { value: '8', label: 'Option 8' },
      { value: '9', label: 'Option 9' },
      { value: '10', label: 'Option 10' },
    ],
  },
  placeholder: {
    control: {
      type: 'text',
    },
    defaultValue: 'Select an option',
  },
  taggable: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  multiple: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  clearable: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  loading: {
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
    defaultValue: '',
  },
  modelValue: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
};

export default {
  title: 'Components/Dropdown',
  component: Select,

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

  args: {
    appendIcon: 'expand_less',
  },
};

export const Multiple = {
  render: Default.bind({}),
  name: 'Multiple',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    multiple: true,
    placeholder: 'Select multiple options',
    appendIcon: 'expand_less',
  },
};

export const Taggable = {
  render: Default.bind({}),
  name: 'Taggable',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    taggable: true,
    placeholder: 'Search or create a tag',
    appendIcon: 'expand_less',
  },
};
