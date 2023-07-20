import { action } from '@storybook/addon-actions';
import TextArea from './RTextArea.vue';

const Default = (args) => ({
  components: { TextArea },
  setup() {
    return { args, input: action('input') };
  },
  template: `
    <TextArea
      v-bind="args"
      @input="input"
    />
  `,
});

const defaultArgs = {
  errorMsg: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  label: {
    control: {
      type: 'text',
    },
    defaultValue: 'Text Area',
  },
  placeholder: {
    control: {
      type: 'text',
    },
    defaultValue: 'RocketUI',
  },
  modelValue: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  hint: {
    control: {
      type: 'text',
    },
    defaultValue: 'A form control for editing multi-line text.',
  },
};

export default {
  title: 'Components/TextArea',
  component: TextArea,

  argTypes: {
    ...defaultArgs,
  },
};

export const Overview = {
  render: Default.bind({}),
  name: 'Overview',

  argTypes: {
    ...Default.argTypes,
  },

  args: {},
};

export const Defaultt = {
  render: Default.bind({}),
  name: 'Default',

  argTypes: {
    ...Default.argTypes,
  },

  args: {},
};
