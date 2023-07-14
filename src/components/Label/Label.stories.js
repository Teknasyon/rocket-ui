import Label from './Label.vue';
import Textfield from '../Textfield/Textfield.vue';

const Default = (args) => {
  return {
    components: { Label, Textfield },
    setup() {
      return {
        args,
      };
    },
    template: `
    <Label 
      v-bind="args" 
    />
    <Textfield id="label-for" />
    `,
  };
};

const defaultArgs = {
  id: {
    control: {
      type: 'text',
    },
    defaultValue: 'label',
  },
  for: {
    control: {
      type: 'text',
    },
    defaultValue: 'input',
  },
  text: {
    control: {
      type: 'text',
    },
    defaultValue: 'Label',
  },
};

export default {
  title: 'Components/Label',
  component: Label,

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
    id: 'label-id',
    for: 'label-for',
  },
};
