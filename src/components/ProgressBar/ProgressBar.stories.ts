import type { Meta, StoryObj } from '@storybook/vue3';

// @ts-ignore
import Progressbar from './RProgressbar.vue';

const ProgressbarStory = {
  title: 'Components/Progressbar',
  component: Progressbar,
  setup: (args: typeof Progressbar) => ({
    args,
  }),
  template: `<Progressbar v-bind="args" />`,
  tags: ['autodocs'],
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
} as Meta<typeof Progressbar>;

export default ProgressbarStory;

type Story = StoryObj<typeof ProgressbarStory>;

export const Overview: Story = {};
