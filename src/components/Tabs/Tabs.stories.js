import Tabs from './RTabs.vue';

const Default = (args) => ({
  components: { Tabs },
  setup() {
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
});

const defaultArgs = {
  tabs: {
    control: {
      type: 'object',
    },
    defaultValue: [
      { id: 0, label: 'Tab 1', icon: 'home' },
      { id: 1, label: 'Tab 2', icon: 'add_circle', disabled: true },
      { id: 2, label: 'Tab 3', icon: 'favorite' },
      { id: 3, label: 'Tab 4', icon: 'face' },
      { id: 4, label: 'Tab 5', icon: 'settings' },
    ],
  },
  scrollable: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};

export default {
  title: 'Components/Tabs',
  component: Tabs,

  argTypes: {
    ...defaultArgs,
  },
};

export const Overview = {
  render: Default.bind({}),
  name: 'Overview',

  argTypes: {
    ...Default.argTypes,
  },

  args: {},
};

export const Defaultt = {
  render: Default.bind({}),
  name: 'Default',

  argTypes: {
    ...Default.argTypes,
  },

  args: {},
};

export const IconOnly = {
  render: Default.bind({}),
  name: 'Icon Only',

  argTypes: {
    ...Default.argTypes,
  },

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

export const TextOnly = {
  render: Default.bind({}),
  name: 'Text Only',

  argTypes: {
    ...Default.argTypes,
  },

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
