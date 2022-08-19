import MyButton from './Button.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: MyButton,

  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    primary: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    secondary: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    tertiary: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    quaternary: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    outline: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    loading: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
    },
    icon: {
      control: { type: 'text' },
      defaultValue: '',
    },
    onClick: {},
  },
} as Meta<typeof MyButton>;

const Template: StoryFn<typeof MyButton> = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: `<my-button v-bind="args"/>`,
  parameters: {
    notes: 'A simple button component',
  },
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'Secondary Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary: true,
  label: 'Tertiary Button',
  icon: 'PlusCircleSolid',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  quaternary: true,
  label: 'Quaternary Button',
};
export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  label: 'Outline Button',
};
