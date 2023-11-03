import type { Meta, StoryObj } from '@storybook/vue3'
import Box from './RBox.vue'

const DefaultArgTypes = {
  is: {
    type: 'select',
    options: ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  },
  display: {
    type: 'select',
    options: [
      'block',
      'inline-block',
      'inline',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
      'table',
      'inline-table',
      'contents',
      'list-item',
      'none',
    ],
  },
}
const DefaultArgs = {
  is: 'div',
  display: 'block',
  width: 'auto',
  height: 'auto',
  minWidth: 'auto',
  minHeight: 'auto',
  maxWidth: 'auto',
  maxHeight: 'auto',
}
const BoxStory = {
  title: 'Layout/Box',
  component: Box,
  setup(args: any) {
    return { args }
  },
  template: '<Box v-bind="args" />',
  args: DefaultArgs,
  argTypes: DefaultArgTypes,
} as Meta<typeof Box>

export default BoxStory

type Story = StoryObj<typeof BoxStory>

export const Overview: Story = {
  args: {
    default: 'Hello World',
  },
}
