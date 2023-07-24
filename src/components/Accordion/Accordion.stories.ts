import type { Meta, StoryObj } from '@storybook/vue3';
import Accordion from './RAccordion.vue';

const DefaultArgs = {
  accordions: [
    {
      title: 'Accordion 1',
      content: 'Accordion 1 content',
    },
  ],
  modelValue: false,
};

const DefaultArgTypes = {
  modelValue: {
    control: {
      type: 'boolean',
    },
  },
  'onUpdate:modelValue': {
    action: 'update:modelValue',
  },
};

const AccordionStory = {
  title: 'Components/Accordion',
  component: Accordion,
  setup: (args: typeof Accordion) => {
    return { args };
  },
  template: `<Accordion v-bind="args" @update="update"/>`,
  args: DefaultArgs,
  argTypes: DefaultArgTypes,
} as Meta<typeof Accordion>;

export default AccordionStory;

type Story = StoryObj<typeof AccordionStory>;

export const Overview: Story = {
  args: {
    accordions: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
      },
    ],
  },
};

export const SingleCollapse: Story = {
  args: {
    accordions: [
      {
        title: 'Accordion 1',
        content: 'Accordion 1 content',
      },
    ],
  },
};

export const Accordion1: Story = {
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
