import type { Meta, StoryObj } from '@storybook/vue3';

import Chip from './RChip.vue';

const DefaultArgTypes = {
  variant: {
    type: 'select',
    options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
  },
  size: {
    type: 'select',
    options: ['small', 'medium', 'large'],
  },
  'onClick:chip': {
    action: 'click:chip',
  },
  'onClick:close': {
    action: 'click:close',
  },
};

const DefaultArgs = {
  label: 'Chip',
  prependIcon: '',
  appendIcon: 'mdiClose',
  ghost: false,
  size: 'medium',
  variant: 'primary',
  disabled: false,
};

const ChipStory = {
  title: 'Components/Chip',
  component: Chip,
  setup: (args: typeof Chip) => {
    return {
      args,
    };
  },
  template: `
    <Chip v-bind="args"/>
  `,
  args: DefaultArgs,
  argTypes: DefaultArgTypes,
} as Meta<typeof Chip>;

export default ChipStory;

type Story = StoryObj<typeof ChipStory>;

export const Overview: Story = {
  args: {
    prependIcon: 'mdiFaceMan',
  },
};

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
};
