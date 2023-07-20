import Flex from './RFlex.vue';
import Box from '../Box/RBox.vue';

const Default = (args) => ({
  components: { Flex, Box },
  setup() {
    return { args };
  },
  template: `
    <Flex v-bind="args">
      <Box>Box 1</Box>
      <Box>Box 2</Box>
    </Flex>`,
});

const defaultArgs = {
  align: {
    control: {
      type: 'select',
      options: [
        'normal',
        'stretch',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'baseline',
        'first baseline',
        'last baseline',
        'safe center',
        'unsafe center',
      ],
    },
    defaultValue: 'start',
  },
  justify: {
    control: {
      type: 'select',
      options: [
        'start',
        'center',
        'end',
        'flex-start',
        'flex-end',
        'left',
        'right',
        'normal',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
        'safe center',
        'unsafe center',
      ],
    },
    defaultValue: 'start',
  },
  wrap: {
    control: {
      type: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    defaultValue: 'nowrap',
  },
  direction: {
    control: {
      type: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    defaultValue: 'row',
  },
  basis: {
    control: {
      type: 'select',
      options: [
        'auto',
        'max-content',
        'min-content',
        'fit-content',
        'content',
        'inherit',
        'initial',
        'unset',
      ],
    },
    defaultValue: 'auto',
  },
  grow: {
    control: {
      type: 'select',
      options: ['0', '1', '2', '3', '4', '5'],
    },
    defaultValue: '0',
  },
  shrink: {
    control: {
      type: 'select',
      options: ['0', '1', '2', '3', '4', '5'],
    },
    defaultValue: '1',
  },
};

export default {
  title: 'Layout/Flex',
  component: Flex,

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

  args: {},
};
