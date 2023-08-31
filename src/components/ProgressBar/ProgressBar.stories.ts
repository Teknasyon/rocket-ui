import type { Meta, StoryObj } from '@storybook/vue3';

// @ts-ignore
import ProgressBar from './RProgressBar.vue';

const ProgressBarStory = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  setup: (args: typeof ProgressBar) => ({
    args,
  }),
  template: `<ProgressBar v-bind="args" />`,
  tags: ['autodocs'],
} as Meta<typeof ProgressBar>;

export default ProgressBarStory;

type Story = StoryObj<typeof ProgressBarStory>;

export const Overview: Story = {};
