import { action } from '@storybook/addon-actions';
import Accordion from './Accordion.vue';

const Default = (args) => ({
  components: { Accordion },
  setup() {
    return { args, update: action('update:modelValue') };
  },
  template: `<Accordion v-bind="args" @update:modelValue="update"/>`,
});

const defaultArgs = {
  accordions: {
    control: {
      type: 'array',
    },
    defaultValue: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
      },
    ],
  },
  modelValue: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};

export default {
  title: 'Components/Accordion',
  component: Accordion,

  argTypes: {
    ...defaultArgs,
  },

  parameters: {
    viewMode: 'docs',
  },
};

export const Overview = {
  render: Default.bind({}),
  argTypes: {
    ...Default.argTypes,
  },

  args: {
    accordions: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
      },
    ],
  },
};

export const SingleCollapse = {
  render: Default.bind({}),
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    accordions: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
      },
    ],
  },
};

export const Accordion1 = {
  render: Default.bind({}),
  argTypes: {
    ...Default.argTypes,
  },
  args: {
    accordions: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
        isExpanded: true,
      },
      {
        title: 'Accordion 2',
        content: 'Accordion 2 content',
      },
      {
        title: 'Accordion 3',
        content: 'Accordion 3 content',
      },
      {
        title: 'Accordion 4',
        content: 'Accordion 4 content',
        isDisabled: true,
      },
    ],
  },
};
