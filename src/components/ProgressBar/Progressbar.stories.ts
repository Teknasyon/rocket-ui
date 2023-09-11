import type { Meta, StoryObj } from '@storybook/vue3';

import Progressbar from './RProgressbar.vue';

const ProgressbarStory = {
  title: 'Components/Progressbar',
  component: Progressbar,
  setup: (args: typeof Progressbar) => ({
    args,
  }),
  template: `<Progressbar v-bind="args" />`,
  args: {
    value: 50,
    height: 8,
  },
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
  tags: ['autodocs'],
} as Meta<typeof Progressbar>;

export default ProgressbarStory;

type Story = StoryObj<typeof ProgressbarStory>;

export const Overview: Story = {};
