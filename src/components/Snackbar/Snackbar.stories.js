import { action } from '@storybook/addon-actions';

import Snackbar from './RSnackbar.vue';

const Default = (args) => ({
  components: { Snackbar },
  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close'),
    };
  },
  template: `
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  `,
});

const defaultArgs = {
  text: {
    control: {
      type: 'text',
    },
    defaultValue: 'Single-line snackbar',
  },
  actionText: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  showAction: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  showClose: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  left: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  show: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  },
  timeout: {
    control: {
      type: 'number',
    },
    defaultValue: 0,
    table: {
      defaultValue: {
        summary: '0',
      },
    },
    description: 'If 0, the snackbar will not dismiss automatically.',
  },
};

export default {
  title: 'Components/Snackbar',
  component: Snackbar,

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

export const WithAction = {
  render: Default.bind({}),
  name: 'With Action',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    actionText: 'Action',
    showAction: true,
    text: 'Single-line snackbar with action',
  },
};

export const WithActionAndCloseButton = {
  render: Default.bind({}),
  name: 'With Action and Close Button',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    actionText: 'Action',
    showAction: true,
    showClose: true,
    text: 'Snackbar with action and close',
  },
};

export const WithCloseButton = {
  render: Default.bind({}),
  name: 'With Close Button',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    showClose: true,
    text: 'Single-line snackbar with close',
  },
};

export const LongText = {
  render: Default.bind({}),
  name: 'Long Text',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    text: 'This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height.',
  },
};

export const LongTextWithAction = {
  render: Default.bind({}),
  name: 'Long Text with Action',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    actionText: 'Action',
    showAction: true,
    text: 'This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height.',
  },
};

export const LongTextWithActionAndCloseButton = {
  render: Default.bind({}),
  name: 'Long Text with Action and Close Button',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    actionText: 'Action',
    showAction: true,
    showClose: true,
    text: 'This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height.',
  },
};

export const WithTimeout = {
  render: Default.bind({}),
  name: 'With Timeout',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    timeout: 5000,
    text: 'Snackbar with timeout',
  },
};
