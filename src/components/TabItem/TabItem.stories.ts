import type { Meta, StoryObj } from '@storybook/vue3';
import TabItem from './RTabItem.vue';

const DefaultArgTypes = {
  variant: {
    type: 'select',
    options: ['default', 'icon-only', 'text-only'],
  },
};

const DefaultArgs = {
  id: 'tab-1',
  label: 'Tab 1',
  icon: 'home',
  disabled: false,
  variant: 'default',
  active: false,
};

const TabItemStory = {
  title: 'Components/TabItem',
  component: TabItem,
  setup(args: typeof TabItem) {
    return { args };
  },
  template: `
    <TabItem v-bind="args"/>
  `,
  args: DefaultArgs,
  argTypes: {
    ...DefaultArgTypes,
    'onUpdate:modelValue': { action: 'update:modelValue' },
  },
} as Meta<typeof TabItem>;

export default TabItemStory;

type Story = StoryObj<typeof TabItem>;

export const Overview: Story = {
  args: {
    variant: 'default',
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'icon-only',
  },
};

export const TextOnly: Story = {
  args: {
    variant: 'text-only',
  },
};
