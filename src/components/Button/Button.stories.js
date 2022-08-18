import MyButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    role: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'icon', 'text', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    icon: { control: 'text' },
    onClick: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  role: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  role: 'secondary',
  label: 'Secondary Button',
};

export const Icon = Template.bind({});
Icon.args = {
  role: 'icon',
  label: 'Icon Button',
  icon: 'PlusCircleSolid',
};

export const Text = Template.bind({});
Text.args = {
  role: 'text',
  label: 'Text Button',
};
export const Outline = Template.bind({});
Outline.args = {
  role: 'outline',
  label: 'Outline Button',
};
