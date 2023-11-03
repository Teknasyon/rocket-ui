import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'

import Icon from './RIcon.vue'

const DefaultArgs = {}

const DefaultArgTypes = {}

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const IconStory = {
  title: 'Components/Icon',
  component: Icon,
  setup: (args: typeof Icon) => ({
    args,
    onClick: action('click'),
  }),
  template: '<Icon v-bind="args" @click="onClick"/>',
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: [],
  args: DefaultArgs,
  argTypes: DefaultArgTypes,
} as Meta<typeof Icon>

export default IconStory

type Story = StoryObj<typeof IconStory>

export const Overview: Story = {
  args: {
    name: 'mdiFaceMan',
  },
}
