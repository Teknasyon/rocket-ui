import Grid from './RGrid.vue';

const Default = (args) => ({
  components: { Grid },
  setup() {
    return { args };
  },
  template: `<Grid v-bind="args">
  hello world
  </Grid>`,
});

const defaultArgs = {
  templateColumns: {
    control: {
      type: 'text',
    },
    defaultValue: 'repeat(3, 1fr)',
  },
  gap: {
    control: {
      type: 'text',
    },
    defaultValue: '20px',
  },
  rowGap: {
    control: {
      type: 'text',
    },
    defaultValue: '20px',
  },
  columnGap: {
    control: {
      type: 'text',
    },
    defaultValue: '20px',
  },
  autoFlow: {
    control: {
      type: 'select',
      options: ['row', 'column', 'dense', 'row dense', 'column dense'],
    },
    defaultValue: 'row',
  },
  autoRows: {
    control: {
      type: 'select',
      options: ['auto', 'min-content', 'max-content', '1rem'],
    },
    defaultValue: 'auto',
  },
  autoColumns: {
    control: {
      type: 'select',
      options: ['auto', 'min-content', 'max-content', '1rem'],
    },
    defaultValue: 'auto',
  },
  templateRows: {
    control: {
      type: 'text',
    },
    defaultValue: 'repeat(3, 1fr)',
  },
  templateAreas: {
    control: {
      type: 'text',
    },
    defaultValue: 'none',
  },
  column: {
    control: {
      type: 'text',
    },
    defaultValue: '1 / 2',
  },
  row: {
    control: {
      type: 'text',
    },
    defaultValue: '1 / 2',
  },
};

export default {
  title: 'Layout/Grid',
  component: Grid,

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
