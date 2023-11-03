import type { Meta, StoryObj } from '@storybook/vue3'
import TextArea from './RTextArea.vue'

const DefaultArgs = {
  errorMsg: '',
  label: 'Text Area',
  placeholder: 'RocketUI',
  modelValue: '',
  disabled: false,
  hint: 'A form control for editing multi-line text.',
}

const TextAreaStory = {
  title: 'Form/TextArea',
  component: TextArea,
  setup(args: typeof TextArea) {
    return { args }
  },
  template: '<TextArea v-bind="args"/>',
  args: DefaultArgs,
  argTypes: {
    onInput: { action: 'input' },
  },
} as Meta<typeof TextArea>

export default TextAreaStory

type Story = StoryObj<typeof TextAreaStory>

export const Overview: Story = {}

export const Default: Story = {
  args: {
    hint: '',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    hint: 'Cannot edit this field.',
  },
}

export const Error: Story = {
  args: {
    errorMsg: 'This field is required.',
  },
}

export const Hint: Story = {
  args: {
    hint: 'This is a hint.',
  },
}
