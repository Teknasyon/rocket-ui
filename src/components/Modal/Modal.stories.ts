import type { Meta, StoryObj } from '@storybook/vue3';

import Modal from './RModal.vue';

const ModalStory = {
  title: 'Components/Modal',
  component: Modal,
  setup: (args: typeof Modal) => ({
    args,
  }),
  template: `
      <div style="height:600px;">
        <Modal v-bind="args" />
      </div>
    `,
  args: {
    title: 'Create Account',
    description:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment',
    closeText: 'Close',
    submitText: 'Submit',
  },
  argTypes: {
    onSubmit: {
      action: 'submit',
    },
  },
} as Meta<typeof Modal>;

export default ModalStory;

type Story = StoryObj<typeof ModalStory>;

export const Overview: Story = {};

export const WithForm: Story = {
  args: {
    open: true,
    icon: 'mail',
    form: {
      name: '',
      email: '',
      password: '',
    },
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name',
        rules: 'required',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        rules: 'required|email',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        rules: 'required|min:8',
      },
    ],
  },
};

export const OnlyForm: Story = {
  args: {
    open: true,
    icon: 'mail',
    description: '',
    form: {
      name: '',
    },
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your name',
        rules: 'required',
      },
    ],
  },
};
