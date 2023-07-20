import { action } from '@storybook/addon-actions';
import Alert from './RAlert.vue';
import Icon from '../Icon/RIcon.vue';

const Default = (args) => ({
  components: { Alert },
  setup() {
    return { args, click: action('close') };
  },
  template: `<Alert v-bind="args" @close="click"/>`,
});

const DefaultWithSlots = (args) => ({
  components: { Alert, Icon },
  setup() {
    return { args, onClick: action('close') };
  },
  template: `
  <Alert v-bind="args">
    <template #close>
      <Icon name="logout" @click="onClick" />
    </template>
  </Alert>`,
});

const defaultArgs = {
  type: {
    control: {
      type: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    defaultValue: 'success',
    table: {
      defaultValue: {
        summary: 'success',
        detail: 'success | info | warning | error',
      },
    },
    description: 'Type of alert',
  },
  title: {
    control: {
      type: 'text',
    },
    defaultValue: 'Alert Title',
  },
  description: {
    control: {
      type: 'text',
    },
    defaultValue:
      'A type of alert which appears in a layer above other content, visually similar to a mobile or desktop push notification.',
  },
  size: {
    control: {
      type: 'select',
      options: ['small', 'medium', 'large'],
    },
    defaultValue: 'medium',
    table: {
      defaultValue: {
        summary: 'medium',
        detail: 'small | medium | large ',
      },
    },
    description: 'Sizes of alert',
  },
  closable: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  },
  closeText: {
    control: {
      type: 'text',
    },
    defaultValue: 'Close',
  },
};

export default {
  title: 'Components/Alert',
  component: Alert,

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
    type: 'success',
  },
};

export const Success = {
  render: Default.bind({}),
  name: 'Success',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'success',
    title: 'Success',
    description:
      'Success Variant! This is a short but descriptive message that indicates a successful action.',
  },
};

export const Error = {
  render: Default.bind({}),
  name: 'Error',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'error',
    title: 'Error',
    description:
      'Error Variant! This is a short but descriptive message that indicates a negative action.',
  },
};

export const Information = {
  render: Default.bind({}),
  name: 'Information',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'info',
    title: 'Info',
    description:
      'Info Variant! This is a short but descriptive message that indicates a neutral informative action.',
  },
};

export const Warning = {
  render: Default.bind({}),
  name: 'Warning',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'warning',
    title: 'Warning',
    description:
      'Warning Variant! This is a short but descriptive message that indicates a negative or dangerous action.',
  },
};

export const CustomCloseButton = {
  render: DefaultWithSlots.bind({}),
  name: 'Custom Close Button',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    type: 'info',
    title: 'With a custom button',
    description:
      'This alert box looks very similar to our default examples but it contains a custom close button in it!',
  },
};
