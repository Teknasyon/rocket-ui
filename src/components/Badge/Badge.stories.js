import { action } from '@storybook/addon-actions';
import Badge from './RBadge.vue';
import Icon from '../Icon/RIcon.vue';
import Button from '../Button/RButton.vue';

const Default = (args) => ({
  components: { Badge, Icon },
  setup() {
    return { args, click: action('click') };
  },
  template: `
    <Badge v-bind="args" @click="click">
      <template v-slot:default>
        <Icon name="email" size="24" />
      </template>
    </Badge>
    `,
});

const ButtonTemplate = (args) => ({
  components: { Badge, Button },
  setup() {
    return { args };
  },
  template: `
    <Badge v-bind="args">
      <template v-slot:default>
        <Button icon="add" variant="primary">Hello World</Button>
      </template>
    </Badge>
    `,
});

const defaultArgs = {
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'success', 'error', 'warning', 'neutral'],
    },
  },
  placement: {
    control: {
      type: 'select',
      options: ['right', 'bottom', 'left'],
    },
    defaultValue: 'right',
  },
  overlap: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  hover: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  content: {
    control: {
      type: 'text',
    },
    defaultValue: '3',
  },
  outside: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};

export default {
  title: 'Components/Badge',
  component: Badge,

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
    placement: 'right',
  },
};

export const Right = {
  render: Default.bind({}),
  name: 'Right',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    placement: 'right',
  },
};

export const WithContent = {
  render: ButtonTemplate.bind({}),
  name: 'With Content',

  argTypes: {
    ...ButtonTemplate.argTypes,
  },

  args: {
    content: '32',
  },
};

export const Hover = {
  render: Default.bind({}),
  name: 'Hover',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    hover: true,
  },
};

export const Bottom = {
  render: Default.bind({}),
  name: 'Bottom',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    placement: 'bottom',
  },
};

export const Left = {
  render: Default.bind({}),
  name: 'Left',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    placement: 'left',
  },
};
