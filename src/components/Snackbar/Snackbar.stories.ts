import type { Meta, StoryObj } from '@storybook/vue3';
import Snackbar from './RSnackbar.vue';

const DefaultArgs = {
  text: 'Single-line snackbar',
  closable: false,
  left: false,
  modelValue: true,
  timeout: 0,
  variant: 'info',
};

const DefaultArgTypes = {
  variant: {
    type: 'select',
    options: ['info', 'success', 'warning', 'error', ''],
  },
  update: { action: 'update:modelValue' },
};

const SnackbarStory = {
  title: 'Components/Snackbar',
  component: Snackbar,
  setup: (args: typeof Snackbar) => ({
    args,
  }),
  template: '<Snackbar v-bind="args" />',
  args: { ...DefaultArgs },
  argTypes: {
    ...DefaultArgTypes,
  },
} as Meta<typeof Snackbar>;

export default SnackbarStory;

type Story = StoryObj<typeof SnackbarStory>;

export const Overview: Story = {};

export const OnlyText: Story = {};

export const WithAction: Story = {
  args: {
    text: 'Single-line snackbar with action',
  },
};

export const WithCloseButton: Story = {
  args: {
    closable: true,
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
    text: 'This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height.',
  },
};

export const LongTextWithCloseButton: Story = {
  args: {
    closable: true,
    text: 'This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height.',
  },
};

export const WithTimeout: Story = {
  args: {
    timeout: 5000,
    text: 'Snackbar with timeout',
  },
};
