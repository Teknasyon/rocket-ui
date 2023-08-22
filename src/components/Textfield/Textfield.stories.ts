import type { Meta, StoryObj } from '@storybook/vue3';
import Textfield from './RTextfield.vue';

const DefaultArgTypes = {
  type: {
    type: 'select',
    options: ['text', 'password', 'email', 'number', 'tel', 'url'],
  },
};

const DefaultArgs = {
  id: 'textfield',
  type: 'text',
  label: 'Textfield',
  placeholder: 'Placeholder',
  modelValue: '',
  errorMsg: '',
  hint: 'This is a hint text to help user.',
  prependIcon: '',
  appendIcon: '',
  loading: false,
  disabled: false,
  clearable: false,
};

const TextfieldStory = {
  title: 'Form/Textfield',
  component: Textfield,
  setup(args: typeof Textfield) {
    return {
      args,
    };
  },
  template: `<Textfield v-bind="args" />`,
  argTypes: {
    ...DefaultArgTypes,
    onInput: { action: 'input' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
    'onClick:icon': { action: 'click:icon' },
    'onClick:clear': { action: 'click:clear' },
  },

  args: {},
} as Meta<typeof Textfield>;

export default TextfieldStory;

type Story = StoryObj<typeof TextfieldStory>;

export const Overview: Story = {
  args: {
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Mail: Story = {
  args: {
    type: 'email',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Url: Story = {
  args: {
    type: 'url',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Tel: Story = {
  args: {
    type: 'tel',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Error: Story = {
  args: {
    type: 'text',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
    errorMsg: 'This is an error message',
  },
};
