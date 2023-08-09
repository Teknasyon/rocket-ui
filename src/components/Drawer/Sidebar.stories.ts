import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import Sidebar from './RSidebar.vue';

const SidebarStory = {
  title: 'Components/Sidebar',
  component: Sidebar,
  setup: (args: typeof Sidebar) => ({
    args,
  }),
  template: `
    <Sidebar v-bind="args">
      <template v-slot:default>
        test
      </template>
      <template v-slot:actions>
        test
      </template>
    </Sidebar>
  `,
} as Meta<typeof Sidebar>;

export default SidebarStory;

type Story = StoryObj<typeof SidebarStory>;

export const Collapsed: Story = {};

export const Expanded: Story = {
  args: {
    modelValue: true,
  },
};
