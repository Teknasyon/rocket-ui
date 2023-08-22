import type { Meta, StoryObj } from '@storybook/vue3';
import TabItem from './RTabItem.vue';

const DefaultArgTypes = {
  variant: {
    type: 'select',
    options: ['default', 'icon', 'text'],
  },
};

const DefaultArgs = {
  id: 'tab-1',
  label: 'Tab 1',
  prependIcon: 'mdiHome',
  appendIcon: '',
  disabled: false,
  variant: 'default',
  tile: false,
  block: false,
  modelValue: '',
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
    'onClick:icon': { action: 'onClick:icon' },
  },
} as Meta<typeof TabItem>;

export default TabItemStory;

type Story = StoryObj<typeof TabItemStory>;

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

export const Icon: Story = {
  args: {
    variant: 'icon',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Tile: Story = {
  args: {
    tile: true,
  },
};

export const Block: Story = {
  args: {
    block: true,
  },
};

export const Active: Story = {
  args: {
    modelValue: 'tab-1',
  },
};

export const TwoIcons: Story = {
  args: {
    prependIcon: 'mdiHome',
    appendIcon: 'mdiPlusCircle',
  },
};
