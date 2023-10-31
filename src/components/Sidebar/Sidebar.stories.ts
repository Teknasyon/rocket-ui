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
    <div style="background-color:red;">
      <Sidebar v-bind="args">
        test
        <template #actions>
          test
        </template>
      </Sidebar>
      <div>
      test
      </div>
    </div>
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
