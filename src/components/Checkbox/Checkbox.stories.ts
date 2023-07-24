import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from './RCheckbox.vue';

const DefaultArgs = {
  id: 'checkbox',
  label: 'Checkbox Label',
  indeterminate: false,
  disabled: false,
  hint: 'Save my login details for next time.',
  errorMsg: '',
  modelValue: false,
};

const CheckboxStory = {
  title: 'Form/Checkbox',
  component: Checkbox,
  setup(args: typeof Checkbox) {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
  args: DefaultArgs,
  argTypes: {
    modelValue: {
      control: {
        type: 'boolean',
      },
    },
    'onUpdate:modelValue': {
      action: 'update:modelValue',
    },
  },
} as Meta<typeof Checkbox>;

export default CheckboxStory;

type Story = StoryObj<typeof Checkbox>;

export const Overview: Story = {
  args: {
    id: 'checkbox-1',
    label: 'Checkbox label',
  },
};

export const Checked: Story = {
  args: {
    id: 'checkbox-1',
    label: 'Checkbox label',
    modelValue: true,
  },
};

export const Indeterminate: Story = {
  args: {
    id: 'checkbox-1',
    label: 'Checkbox label',
    indeterminate: true,
  },
};

export const WithError: Story = {
  args: {
    id: 'checkbox-1',
    label: 'Checkbox label',
    errorMsg: 'This field is required',
  },
};
