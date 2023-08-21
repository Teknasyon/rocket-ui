import type { Meta, StoryObj } from '@storybook/vue3';

// @ts-ignore
import Pagination from './RPagination.vue';

const PaginationStory = {
  title: 'Components/Pagination',
  component: Pagination,
  setup: (args: typeof Pagination) => ({
    args,
  }),
  template: `<Pagination v-bind="args" />`,
  args: {},
  argTypes: {
    'onUpdate:page': { action: 'update:page' },
  },
  tags: ['autodocs'],
} as Meta<typeof Pagination>;

export default PaginationStory;

type Story = StoryObj<typeof PaginationStory>;

export const Overview: Story = {};
