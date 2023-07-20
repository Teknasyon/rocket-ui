import { action } from '@storybook/addon-actions';

import Avatar from './RAvatar.vue';

const Default = (args) => ({
  components: { Avatar },
  setup() {
    return { args, click: action('close') };
  },
  template: `<Avatar v-bind="args" @close="click"/>`,
});

const defaultArgs = {
  type: {
    control: {
      type: 'select',
      options: ['image', 'text'],
    },
    defaultValue: 'image',
  },
  size: {
    control: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    defaultValue: 'md',
  },
  src: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  alt: {
    control: {
      type: 'text',
    },
    defaultValue: 'Avatar',
  },
  online: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  text: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
};

export default {
  title: 'Components/Avatar',
  component: Avatar,

  argTypes: {
    ...defaultArgs,
  },

  parameters: {
    viewMode: 'docs',
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

export const Image = {
  render: Default.bind({}),
  name: 'Image',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'image',
    src: 'https://avatars.githubusercontent.com/u/12534660?v=4',
  },
};

export const Text = {
  render: Default.bind({}),
  name: 'Text',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'text',
    text: 'Avatar Text',
  },
};

export const Anonymous = {
  render: Default.bind({}),
  name: 'Anonymous',

  argTypes: {
    ...Default.argTypes,
  },

  args: {},
};

export const Online = {
  render: Default.bind({}),
  name: 'Online',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    online: true,
    src: 'https://avatars.githubusercontent.com/u/12534660?v=4',
  },
};
