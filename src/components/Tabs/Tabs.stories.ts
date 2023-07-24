import type { Meta, StoryObj } from '@storybook/vue3';
import Tabs from './RTabs.vue';

const DefaultArgs = {
  tabs: [
    { id: 0, label: 'Tab 1', icon: 'home' },
    { id: 1, label: 'Tab 2', icon: 'add_circle', disabled: true },
    { id: 2, label: 'Tab 3', icon: 'favorite' },
    { id: 3, label: 'Tab 4', icon: 'face' },
    { id: 4, label: 'Tab 5', icon: 'settings' },
  ],
  scrollable: false,
};

const TabsStory = {
  title: 'Components/Tabs',
  component: Tabs,
  setup(args: typeof Tabs) {
    return { args };
  },
  template: `
    <Tabs v-bind="args" >
      <template #tab={activeTab}>
        <h1>Tab {{activeTab + 1}}</h1>
        <p>Active tab {{activeTab}}</p>
      </template>
    </Tabs>
  `,
  args: DefaultArgs,
  argTypes: {},
} as Meta<typeof Tabs>;

export default TabsStory;

type Story = StoryObj<typeof Tabs>;

export const Overview: Story = {};

export const Default: Story = {};

export const IconOnly: Story = {
  args: {
    tabs: [
      {
        id: 0,
        label: 'Tab 1',
        icon: 'home',
      },
      {
        id: 1,
        label: 'Tab 2',
        icon: 'add_circle',
        disabled: true,
      },
      {
        id: 2,
        label: 'Tab 3',
        icon: 'favorite',
      },
      {
        id: 3,
        label: 'Tab 4',
        icon: 'face',
      },
      {
        id: 4,
        label: 'Tab 5',
        icon: 'settings',
      },
      {
        id: 5,
        label: 'Tab 6',
        icon: 'search',
      },
      {
        id: 6,
        label: 'Tab 7',
        icon: 'done',
      },
      {
        id: 7,
        label: 'Tab 8',
        icon: 'visibility',
      },
      {
        id: 8,
        label: 'Tab 9',
        icon: 'lock',
      },
      {
        id: 9,
        label: 'Tab 10',
        icon: 'language',
      },
    ],
  },
};

export const TextOnly: Story = {
  args: {
    tabs: [
      {
        id: 0,
        label: 'Tab 1',
        icon: 'home',
      },
      {
        id: 1,
        label: 'Tab 2',
        icon: 'add_circle',
        disabled: true,
      },
      {
        id: 2,
        label: 'Tab 3',
        icon: 'favorite',
      },
      {
        id: 3,
        label: 'Tab 4',
        icon: 'face',
      },
      {
        id: 4,
        label: 'Tab 5',
        icon: 'settings',
      },
      {
        id: 5,
        label: 'Tab 6',
        icon: 'search',
      },
      {
        id: 6,
        label: 'Tab 7',
        icon: 'done',
      },
      {
        id: 7,
        label: 'Tab 8',
        icon: 'visibility',
      },
      {
        id: 8,
        label: 'Tab 9',
        icon: 'lock',
      },
      {
        id: 9,
        label: 'Tab 10',
        icon: 'language',
      },
    ],
  },
};
