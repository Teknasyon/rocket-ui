import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button/Button.vue';
import Icon from '../components/Icon/Icon.vue';

//👇 Imports a specific story from ListItem stories
import { DefaultIcon } from '../components/Icon/Icon.stories';

const DefaultArgs = {
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

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const DefaultButton = {
  title: 'Example/Button',
  component: Button,
  setup: (args: typeof Button) => ({
    args,
  }),
  template: `<Button v-bind="args" />`,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    ...DefaultArgs,
  },
  args: {
    onClick: action('click'),
  },
} as Meta<typeof Button>;

export default DefaultButton;

type Story = StoryObj<typeof DefaultButton>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Overview: Story = {
  args: {
    variant: 'primary',
    default: 'Primary',
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
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

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const OneItem: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup() {
      //👇 The args will now be passed down to the template
      return { args };
    },
    template: '<Button v-bind="args"><Icon v-bind="args"/></Button>',
  }),
  args: {
    ...DefaultIcon.args,
  },
};
