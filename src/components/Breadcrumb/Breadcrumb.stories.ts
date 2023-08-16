import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumb from './RBreadcrumb.vue';

const BreadcrumbStory = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  setup: (args: typeof Breadcrumb) => {
    return { args };
  },
  template: `<Breadcrumb v-bind="args" />`,
  args: {
    items: [
      {
        title: 'Ads Accounts',
        to: '/ads-accounts',
      },
      {
        title: 'Ad Account Detail',
        to: '/ads-accounts/123',
      },
      {
        title: 'Transaction History',
        to: '/ads-accounts/123/transaction-history',
      },
    ],
    seperator: 'mdiSlashForward',
  },
  tags: ['autodocs'],
} as Meta<typeof Breadcrumb>;

export default BreadcrumbStory;

type Story = StoryObj<typeof BreadcrumbStory>;

export const Overview: Story = {};

export const WithSeperator: Story = {
  args: {
    seperator: 'mdiChevronRight',
  },
};

export const WithItemIcon: Story = {
  args: {
    items: [
      {
        title: 'Ads Accounts',
        to: '/ads-accounts',
        icon: 'mdiAdvertisements',
      },
      {
        title: 'Ad Account Detail',
        to: '/ads-accounts/123',
        icon: 'mdiAccount',
      },
      {
        title: 'Transaction History',
        to: '/ads-accounts/123/transaction-history',
        icon: 'mdiAccountFilter',
      },
    ],
    seperator: 'mdiSlashForward',
  },
};
