import type { Meta, StoryObj } from '@storybook/vue3';
import Tabs from './RTabs.vue';

const DefaultArgs = {
  tabs: [
    { id: 0, label: 'Tab 1', icon: 'mdiHome' },
    { id: 1, label: 'Tab 2', icon: 'mdiPlusCircle', disabled: true },
    { id: 2, label: 'Tab 3', icon: 'mdiHeart' },
    { id: 3, label: 'Tab 4', icon: 'mdiFaceMan' },
    { id: 4, label: 'Tab 5', icon: 'mdiCog' },
  ],
  block: false,
  activeTab: 0,
  tile: false,
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
  args: { ...DefaultArgs },
  argTypes: {
    'onUpdate:tab': { action: 'onUpdate:tab' },
  },
} as Meta<typeof Tabs>;

export default TabsStory;

type Story = StoryObj<typeof TabsStory>;

export const Overview: Story = {};

export const Default: Story = {};

export const Icon: Story = {
  args: {
    tabs: [
      {
        id: 0,
        label: 'Tab 1',
        icon: 'mdiHome',
        variant: 'icon',
      },
      {
        id: 1,
        label: 'Tab 2',
        icon: 'mdiPlusCircle',
        disabled: true,
        variant: 'icon',
      },
      {
        id: 2,
        label: 'Tab 3',
        icon: 'mdiHeart',
        variant: 'icon',
      },
      {
        id: 3,
        label: 'Tab 4',
        icon: 'mdiFaceMan',
        variant: 'icon',
      },
      {
        id: 4,
        label: 'Tab 5',
        icon: 'mdiCog',
        variant: 'icon',
      },
      {
        id: 5,
        label: 'Tab 6',
        icon: 'mdiMagnify',
        variant: 'icon',
      },
      {
        id: 6,
        label: 'Tab 7',
        icon: 'mdiAccount',
        variant: 'icon',
      },
      {
        id: 7,
        label: 'Tab 8',
        icon: 'mdiAccountGroup',
        variant: 'icon',
      },
      {
        id: 8,
        label: 'Tab 9',
        icon: 'mdiAccountMultiple',
        variant: 'icon',
      },
      {
        id: 9,
        label: 'Tab 10',
        icon: 'mdiAccountMultiplePlus',
        variant: 'icon',
      },
    ],
  },
};

export const Text: Story = {
  args: {
    tabs: [
      {
        id: 0,
        label: 'Tab 1',
        icon: 'mdiHome',
        variant: 'text',
      },
      {
        id: 1,
        label: 'Tab 2',
        icon: 'mdiPlusCircle',
        disabled: true,
        variant: 'text',
      },
      {
        id: 2,
        label: 'Tab 3',
        icon: 'mdiHeart',
        variant: 'text',
      },
      {
        id: 3,
        label: 'Tab 4',
        icon: 'mdiFaceMan',
        variant: 'text',
      },
      {
        id: 4,
        label: 'Tab 5',
        icon: 'mdiCog',
        variant: 'text',
      },
      {
        id: 5,
        label: 'Tab 6',
        icon: 'mdiMagnify',
        variant: 'text',
      },
      {
        id: 6,
        label: 'Tab 7',
        icon: 'mdiAccount',
        variant: 'text',
      },
      {
        id: 7,
        label: 'Tab 8',
        icon: 'mdiAccountGroup',
        variant: 'text',
      },
      {
        id: 8,
        label: 'Tab 9',
        icon: 'mdiAccountMultiple',
        variant: 'text',
      },
      {
        id: 9,
        label: 'Tab 10',
        icon: 'mdiAccountMultiplePlus',
        variant: 'text',
      },
    ],
  },
};

export const Tile: Story = {
  args: {
    tile: true,
    tabs: [
      { id: 1, label: 'Section', icon: 'mdiHeart' },
      { id: 2, label: 'Section', icon: 'mdiFaceMan' },
      { id: 3, label: 'Section', icon: 'mdiCog' },
    ],
    modelValue: 2,
  },
};
