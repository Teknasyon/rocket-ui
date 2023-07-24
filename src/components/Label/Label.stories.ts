import type { Meta, StoryObj } from '@storybook/vue3';

import Label from './RLabel.vue';

const LabelStory = {
  title: 'Form/Label',
  render: (args: any) => ({
    components: { Label },
    setup() {
      return {
        args,
      };
    },
    template: `
    <div style="display: flex; flex-direction: column;">
      <Label v-bind="args" />
      <input id="name" placeholder="John Doe" style="border: gray 1px solid; padding: 4px" />
    </div>
    `,
  }),
  args: {
    id: '',
    for: '',
    text: '',
  },
} as Meta<typeof Label>;

export default LabelStory;

type Story = StoryObj<typeof LabelStory>;

export const Overview: Story = {
  args: {
    id: 'label',
    for: 'name',
    text: 'Name:',
  },
};
