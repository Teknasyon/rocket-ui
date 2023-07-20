import { action } from '@storybook/addon-actions';
import Textfield from './RTextfield.vue';

const Default = (args) => {
  return {
    components: { Textfield },
    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear'),
      };
    },
    template: `
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />`,
  };
};

const defaultArgs = {
  id: {
    control: {
      type: 'text',
    },
    defaultValue: 'textfield',
  },
  type: {
    control: {
      type: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    defaultValue: 'text',
  },
  label: {
    control: {
      type: 'text',
    },
    defaultValue: 'Textfield',
  },
  placeholder: {
    control: {
      type: 'text',
    },
    defaultValue: 'Placeholder',
  },
  modelValue: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  errorMsg: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  hint: {
    control: {
      type: 'text',
    },
    defaultValue: 'This is a hint text to help user.',
  },
  prependIcon: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  appendIcon: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  iconColor: {
    control: {
      type: 'color',
    },
    defaultValue: '',
  },
  loading: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  clearable: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};

export default {
  title: 'Components/Textfield',
  component: Textfield,

  argTypes: {
    ...defaultArgs,
  },

  parameters: {
    viewMode: 'docs',
  },
};

export const Overview = {
  render: Default.bind({}),
  name: 'Overview',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Text = {
  render: Default.bind({}),
  name: 'Text',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'text',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Mail = {
  render: Default.bind({}),
  name: 'Mail',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'email',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Password = {
  render: Default.bind({}),
  name: 'Password',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'password',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Url = {
  render: Default.bind({}),
  name: 'Url',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'url',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Tel = {
  render: Default.bind({}),
  name: 'Tel',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'tel',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const Number = {
  render: Default.bind({}),
  name: 'Number',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'number',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
  },
};

export const WithError = {
  render: Default.bind({}),
  name: 'With Error',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'text',
    id: 'textfield-id',
    label: 'Textfield label',
    placeholder: 'Textfield placeholder',
    errorMsg: 'This is an error message',
  },
};
