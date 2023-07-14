import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox.vue';

const Default = (args) => {
  return {
    components: { Checkbox },
    setup() {
      return { args, change: action('change') };
    },
    template: '<Checkbox v-bind="args" @update:modelValue="change"/>',
  };
};

const defaultArgs = {
  id: {
    control: {
      type: 'text',
    },
    defaultValue: 'checkbox',
  },
  modelValue: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  label: {
    control: {
      type: 'text',
    },
    defaultValue: 'Checkbox Label',
  },
  indeterminate: {
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
  hint: {
    control: {
      type: 'text',
    },
    defaultValue: 'Save my login details for next time.',
  },
  errorMsg: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,

  argTypes: {
    ...defaultArgs,
  },

  parameters: {
    viewMode: 'docs',
  },
};

export const Overview = {
  render: Default.bind({}),

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    id: 'checkbox-1',
    label: 'Checkbox label',
  },
};

export const Checked = {
  render: Default.bind({}),
  name: 'Checked',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    id: 'checkbox-1',
    label: 'Checkbox label',
    modelValue: true,
  },
};

export const Indeterminate = {
  render: Default.bind({}),
  name: 'Indeterminate',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    id: 'checkbox-1',
    label: 'Checkbox label',
    indeterminate: true,
  },
};

export const WithError = {
  render: Default.bind({}),
  name: 'With Error',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    id: 'checkbox-1',
    label: 'Checkbox label',
    errorMsg: 'This field is required',
  },
};
