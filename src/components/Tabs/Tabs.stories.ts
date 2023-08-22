import type { Meta, StoryObj } from '@storybook/vue3';
import Tabs from './RTabs.vue';

const DefaultArgs = {
  tabs: [
    { id: 0, label: 'Tab 1', prependIcon: 'mdiHome' },
    { id: 1, label: 'Tab 2', prependIcon: 'mdiPlusCircle', disabled: true },
    { id: 2, label: 'Tab 3', prependIcon: 'mdiHeart' },
    { id: 3, label: 'Tab 4', prependIcon: 'mdiFaceMan' },
    { id: 4, label: 'Tab 5', prependIcon: 'mdiCog', appendIcon: 'mdiClose' },
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
    'onUpdate:modelValue': { action: 'onUpdate:modelValue' },
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
        prependIcon: 'mdiHome',
        variant: 'icon',
      },
      {
        id: 1,
        label: 'Tab 2',
        prependIcon: 'mdiPlusCircle',
        disabled: true,
        variant: 'icon',
      },
      {
        id: 2,
        label: 'Tab 3',
        prependIcon: 'mdiHeart',
        variant: 'icon',
      },
      {
        id: 3,
        label: 'Tab 4',
        prependIcon: 'mdiFaceMan',
        variant: 'icon',
      },
      {
        id: 4,
        label: 'Tab 5',
        prependIcon: 'mdiCog',
        variant: 'icon',
      },
      {
        id: 5,
        label: 'Tab 6',
        prependIcon: 'mdiMagnify',
        variant: 'icon',
      },
      {
        id: 6,
        label: 'Tab 7',
        prependIcon: 'mdiAccount',
        variant: 'icon',
      },
      {
        id: 7,
        label: 'Tab 8',
        prependIcon: 'mdiAccountGroup',
        variant: 'icon',
      },
      {
        id: 8,
        label: 'Tab 9',
        prependIcon: 'mdiAccountMultiple',
        variant: 'icon',
      },
      {
        id: 9,
        label: 'Tab 10',
        prependIcon: 'mdiAccountMultiplePlus',
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
        prependIcon: 'mdiHome',
        variant: 'text',
      },
      {
        id: 1,
        label: 'Tab 2',
        prependIcon: 'mdiPlusCircle',
        disabled: true,
        variant: 'text',
      },
      {
        id: 2,
        label: 'Tab 3',
        prependIcon: 'mdiHeart',
        variant: 'text',
      },
      {
        id: 3,
        label: 'Tab 4',
        prependIcon: 'mdiFaceMan',
        variant: 'text',
      },
      {
        id: 4,
        label: 'Tab 5',
        prependIcon: 'mdiCog',
        variant: 'text',
      },
      {
        id: 5,
        label: 'Tab 6',
        prependIcon: 'mdiMagnify',
        variant: 'text',
      },
      {
        id: 6,
        label: 'Tab 7',
        prependIcon: 'mdiAccount',
        variant: 'text',
      },
      {
        id: 7,
        label: 'Tab 8',
        prependIcon: 'mdiAccountGroup',
        variant: 'text',
      },
      {
        id: 8,
        label: 'Tab 9',
        prependIcon: 'mdiAccountMultiple',
        variant: 'text',
      },
      {
        id: 9,
        label: 'Tab 10',
        prependIcon: 'mdiAccountMultiplePlus',
        variant: 'text',
      },
    ],
  },
};

export const Tile: Story = {
  args: {
    tile: true,
    tabs: [
      { id: 1, label: 'Section', prependIcon: 'mdiHeart' },
      { id: 2, label: 'Section', prependIcon: 'mdiFaceMan' },
      { id: 3, label: 'Section', prependIcon: 'mdiCog' },
    ],
    modelValue: 2,
  },
};
