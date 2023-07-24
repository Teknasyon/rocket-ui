import type { Meta, StoryObj } from '@storybook/vue3';
import Snackbar from './RSnackbar.vue';

const DefaultArgs = {
  text: 'Single-line snackbar',
  actionText: '',
  showAction: false,
  showClose: false,
  left: false,
  show: true,
  timeout: 0,
};

const SnackbarStory = {
  component: Snackbar,
  setup: (args: typeof Snackbar) => ({
    args,
  }),
  template: `
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
      />
    </div>
  `,
  args: DefaultArgs,
  argTypes: {
    onAction: { action: 'action' },
    onClose: { action: 'close' },
  },
} as Meta<typeof Snackbar>;

export default SnackbarStory;

type Story = StoryObj<typeof SnackbarStory>;

export const Overview: Story = {};

export const OnlyText: Story = {};

export const WithAction: Story = {
  args: {
    actionText: 'Action',
    showAction: true,
    text: 'Single-line snackbar with action',
  },
};

export const WithActionAndCloseButton: Story = {
  args: {
    actionText: 'Action',
    showAction: true,
    showClose: true,
    text: 'Snackbar with action and close',
  },
};

export const WithCloseButton: Story = {
  args: {
    showClose: true,
    text: 'Single-line snackbar with close',
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height.',
  },
};

export const LongTextWithAction: Story = {
  args: {
    actionText: 'Action',
    showAction: true,
    text: 'This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height.',
  },
};

export const LongTextWithActionAndCloseButton: Story = {
  args: {
    actionText: 'Action',
    showAction: true,
    showClose: true,
    text: 'This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height.',
  },
};

export const WithTimeout: Story = {
  args: {
    timeout: 5000,
    text: 'Snackbar with timeout',
  },
};
