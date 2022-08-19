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

const PrimaryTemplate: StoryFn<typeof MyButton> = () => ({
  components: { MyButton },
  template: `<my-button primary/>`,
});
export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

const SecondaryTemplate: StoryFn<typeof MyButton> = () => ({
  components: { MyButton },
  template: `<my-button secondary/>`,
});
export const Secondary = SecondaryTemplate.bind({});
Secondary.args = {
  secondary: true,
  label: 'Secondary Button',
};

const TertiaryTemplate: StoryFn<typeof MyButton> = () => ({
  components: { MyButton },
  template: `<my-button tertiary/>`,
});
export const Tertiary = TertiaryTemplate.bind({});
Tertiary.args = {
  tertiary: true,
  icon: 'PlusCircleSolid',
};

const QuaternaryTemplate: StoryFn<typeof MyButton> = () => ({
  components: { MyButton },
  template: `<my-button quaternary/>`,
});
export const Quaternary = QuaternaryTemplate.bind({});
Quaternary.args = {
  quaternary: true,
  label: 'Quaternary Button',
};

const OutlineTemplate: StoryFn<typeof MyButton> = () => ({
  components: { MyButton },
  template: `<my-button outline/>`,
});
export const Outline = OutlineTemplate.bind({});
Outline.args = {
  outline: true,
  label: 'Outline Button',
};
