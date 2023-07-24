import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from './RAvatar.vue';

const DefaultArgs = {
  type: 'image',
  size: '2xl',
  src: 'https://avatars.githubusercontent.com/u/12534660?v=4',
  alt: 'Avatar',
  online: false,
  text: '',
};
const DefaultArgTypes = {
  type: {
    type: 'select',
    options: ['image', 'text'],
  },
  size: {
    type: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  },
};

const AvatarStory = {
  title: 'Components/Avatar',
  component: Avatar,
  setup: (args: typeof Avatar) => {
    return { args };
  },
  template: `<Avatar v-bind="args"/>`,
  args: DefaultArgs,
  argTypes: DefaultArgTypes,
} as Meta<typeof Avatar>;

export default AvatarStory;

type Story = StoryObj<typeof AvatarStory>;

export const Overview: Story = {
  args: {},
};

export const Image: Story = {
  args: {
    type: 'image',
    src: 'https://avatars.githubusercontent.com/u/12534660?v=4',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    text: 'Avatar Text',
  },
};

export const Anonymous: Story = {
  args: {},
};

export const Online: Story = {
  args: {
    online: true,
    src: 'https://avatars.githubusercontent.com/u/12534660?v=4',
  },
};
