import type { Meta, StoryObj } from '@storybook/vue3';
import Icon from '../Icon/RIcon.vue';
import Button from './RButton.vue';

const DefaultArgTypes = {
  variant: {
    type: 'select',
    options: ['default', 'text', 'outline'],
  },
  color: {
    type: 'select',
    options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'],
  },
  size: {
    type: 'select',
    options: ['small', 'medium', 'large'],
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
        <Icon name="mdiMowerBag"/>
        <Icon name="mdiGrass"/>
        <Icon name="mdiHandPeace"/>
      </template>
    </Button>`,
  }),
  argTypes: DefaultArgTypes,
  args: {

  },
} as Meta<typeof Button>;

const ButtonStory = {
  title: 'Form/Button',
  component: Button,
  setup(args: typeof Button) {
    return {
      args,
    };
  },
  template: '<Button v-bind="args"/>',
  args: {
    variant: 'default',
    default: 'Button CTA',
  },
  argTypes: DefaultArgTypes,
} as Meta<typeof Button>;

export default ButtonStory;

type Story = StoryObj<typeof ButtonStory>;

export const Overview: Story = {
  args: {
    variant: 'default',
    color: 'primary',
    default: 'Button',
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    color: 'primary',
    default: 'Primary',
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

export const CustomIcon = {
  render: WithCustomIconSlot.render,
};
