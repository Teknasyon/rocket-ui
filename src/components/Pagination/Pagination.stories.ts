import type { Meta, StoryObj } from '@storybook/vue3'

import Pagination from './RPagination.vue'

const PaginationStory = {
  title: 'Components/Pagination',
  component: Pagination,
  setup: (args: typeof Pagination) => ({
    args,
  }),
  template: '<Pagination v-bind="args" />',
  args: {
    page: 1,
    total: 10,
    perPage: 10,
    totalItems: 100,
    infoText: '1-10 of 100',
  },
  argTypes: {
    'onUpdate:page': { action: 'update:page' },
    'onUpdate:perPage': { action: 'update:perPage' },
  },
  tags: ['autodocs'],
} as Meta<typeof Pagination>

export default PaginationStory

type Story = StoryObj<typeof PaginationStory>

export const Overview: Story = {}
