import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import Icon from './Icon.vue';

const DefaultArgs = {
  name: {
    control: {
      type: 'text',
    },
    defaultValue: 'face',
  },
  size: {
    control: {
      type: 'text',
    },
    defaultValue: '24',
  },
  color: {
    control: {
      type: 'color',
    },
    defaultValue: '',
  },
  kind: {
    control: {
      type: 'radio',
      options: ['filled', 'round', 'outlined', 'sharp', 'two-tone'],
    },
    defaultValue: 'round',
    table: {
      defaultValue: {
        summary: 'filled',
        detail: 'filled | round | outlined | sharp | two-tone',
      },
    },
    description: 'Kinds of icon',
  },
  fontWeight: {
    control: {
      type: 'radio',
      options: ['light', 'bold'],
    },
    defaultValue: 'light',
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const IconStory = {
  title: 'Components/Icon',
  component: Icon,
  setup: (args: typeof Icon) => ({
    args,
  }),
  template: `<Icon v-bind="args" />`,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    ...DefaultArgs,
  },
  args: {
    onClick: action('click'),
  },
} as Meta<typeof Icon>;

export default IconStory;

type Story = StoryObj<typeof IconStory>;

export const DefaultIcon: Story = {
  args: {
    name: 'face',
  },
};
