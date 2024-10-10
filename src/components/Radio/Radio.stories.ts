import type { Meta, StoryObj } from '@storybook/vue3'

import Radio from './RRadio.vue'

const DefaultArgs = {
  id: 'radio',
  modelValue: false,
  name: 'radio-group',
  disabled: false,
  label: 'Save my login details for next time.',
  hint: 'A control used to switch between two states: often on or off.',
  errorMsg: '',
  title: 'Radio Title',
}

const RadioStory = {
  title: 'Form/Radio',
  component: Radio,
  setup: (args: typeof Radio) => ({
    args,
  }),
  template: '<Radio v-bind="args" />',
  args: DefaultArgs,
  argTypes: {
  },
  tags: ['autodocs'],
} as Meta<typeof Radio>

export default RadioStory

type Story = StoryObj<typeof RadioStory>

export const Overview: Story = {}

export const Checked: Story = {
  args: {
    modelValue: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Error: Story = {
  args: {
    errorMsg: 'This is an error message',
  },
}
