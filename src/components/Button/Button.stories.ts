import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './RButton.vue';
import Icon from '../Icon/RIcon.vue';

const DefaultArgTypes = {
  variant: {
    type: 'select',
    options: ['primary', 'secondary', 'text', 'outline'],
  },
  size: {
    type: 'select',
    options: ['small', 'medium', 'large'],
  },
  backgroundColor: {
    control: {
      type: 'color',
    },
  },
  onClick: {
    action: 'click',
  },
};

const WithCustomIconSlot = {
  render: (args: any) => ({
    components: { Button, Icon },
    setup: () => {
      return {
        args,
      };
    },
    template: `
    <Button v-bind="args">
      <template v-slot:custom-icon>
        <Icon name="fingerprint"/>
      </template>
    </Button>`,
  }),
  argTypes: DefaultArgTypes,
  args: {},
} as Meta<typeof Button>;

const ButtonStory = {
  title: 'Form/Button',
  component: Button,
  setup(args: typeof Button) {
    return {
      args,
    };
  },
  template: `<Button v-bind="args"/>`,
  args: {
    variant: 'primary',
    default: 'Button',
  },
  argTypes: DefaultArgTypes,
} as Meta<typeof Button>;

export default ButtonStory;

type Story = StoryObj<typeof ButtonStory>;

export const Overview: Story = {
  args: {
    variant: 'primary',
    default: 'Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'Outline',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    default: 'Text',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    default: 'Danger',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    default: 'Link',
  },
};

export const CustomIcon = {
  render: WithCustomIconSlot.render,
};

export const Unstyled = {
  render: WithCustomIconSlot.render,
};
