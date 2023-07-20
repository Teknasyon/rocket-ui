import { action } from '@storybook/addon-actions';
import Button from './RButton.vue';
import Icon from '../Icon/RIcon.vue';

const WithContentSlot = ({ content, ...rest }) => {
  const args = rest;
  return {
    components: { Button },
    setup() {
      return {
        args,
        content,
        click: action('click'),
      };
    },
    template: `
    <Button v-bind="args" @click="click">
      <template v-slot:default>
        <span>{{ content }}</span>
      </template>
    </Button>`,
  };
};

const WithCustomIconSlot = ({ icon, ...rest }) => {
  const args = rest;
  return {
    components: { Button, Icon },
    setup() {
      return {
        args,
        icon,
        click: action('click'),
      };
    },
    template: `
    <Button v-bind="args" @click="click">
      <template v-slot:custom-icon>
        <Icon name="fingerprint"/>
      </template>
    </Button>`,
  };
};

const defaultArgs = {
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'secondary', 'text', 'outline'],
    },
    defaultValue: 'primary',
    table: {
      defaultValue: {
        summary: 'primary',
        detail: 'primary | secondary | text | outline',
      },
    },
    description: 'Variants of button',
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
    description: 'Sizes of button',
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
  onlyIcon: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  height: {
    control: {
      type: 'text',
    },
    defaultValue: '',
  },
  block: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  backgroundColor: {
    control: {
      type: 'color',
    },
  },
};

export default {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    ...defaultArgs,
  },

  parameters: {
    viewMode: 'docs',
  },
};

export const Overview = {
  render: WithContentSlot.bind({}),
  name: 'Overview',

  argTypes: {
    ...WithContentSlot.argTypes,
  },

  args: {
    variant: 'primary',
    content: 'Button',
  },
};

export const Primary = {
  render: WithContentSlot.bind({}),
  name: 'Primary',

  argTypes: {
    ...WithContentSlot.argTypes,
  },

  args: {
    variant: 'primary',
    content: 'Primary',
  },
};

export const Secondary = {
  render: WithContentSlot.bind({}),
  name: 'Secondary',

  argTypes: {
    ...WithContentSlot.argTypes,
  },

  args: {
    variant: 'secondary',
    content: 'Secondary',
  },
};

export const Outline = {
  render: WithContentSlot.bind({}),
  name: 'Outline',

  argTypes: {
    ...WithContentSlot.argTypes,
  },

  args: {
    variant: 'outline',
    content: 'Outline',
  },
};

export const Text = {
  render: WithContentSlot.bind({}),
  name: 'Text',

  argTypes: {
    ...WithContentSlot.argTypes,
  },

  args: {
    variant: 'text',
    content: 'Text',
  },
};

export const CustomIcon = {
  render: WithCustomIconSlot.bind({}),
  name: 'Custom Icon',

  argTypes: {
    ...WithCustomIconSlot.argTypes,
  },

  args: {
    variant: 'primary',
  },
};

export const Unstyled = {
  render: WithCustomIconSlot.bind({}),
  name: 'Unstyled',

  argTypes: {
    ...WithCustomIconSlot.argTypes,
  },

  args: {},
};

export const Danger = {
  render: WithContentSlot.bind({}),
  name: 'Danger',

  argTypes: {
    ...WithContentSlot.argTypes,
  },

  args: {
    variant: 'danger',
    content: 'Danger',
  },
};

export const Link = {
  render: WithContentSlot.bind({}),
  name: 'Link',

  argTypes: {
    ...WithContentSlot.argTypes,
  },

  args: {
    variant: 'link',
    content: 'Link',
  },
};
