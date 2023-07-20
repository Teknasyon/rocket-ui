import { action } from '@storybook/addon-actions';
import Tooltip from './RTooltip.vue';
import Button from '../Button/RButton.vue';
import Icon from '../Icon/RIcon.vue';
import { vTooltip } from '../../directives';

const Default = ({ buttonContent, ...args }) => {
  return {
    components: { Tooltip, Button },
    setup() {
      return {
        args,
        show: action('show'),
        hide: action('hide'),
      };
    },
    template: `
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <Button variant="primary">${buttonContent}</Button>
      </template>
    </Tooltip>
    `,
  };
};

const WithContentSlot = (args) => {
  return {
    components: { Tooltip, Icon },
    setup() {
      return {
        args,
        show: action('show'),
        hide: action('hide'),
      };
    },
    template: `
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <Icon name="info" />
      </template>
      <template #content>
        <span style="background: red; color: #fff; padding: 8px;">This is a tooltip</span>
      </template>
    </Tooltip>
    `,
  };
};

const ToggleTemplate = (args) => {
  return {
    components: { Tooltip },
    setup() {
      return {
        args,
        show: action('show'),
        hide: action('hide'),
      };
    },
    template: `
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <span>Toggle tooltip</span>
      </template>
    </Tooltip>
    `,
  };
};

const WithDirectives = () => {
  return {
    components: { Button },
    directives: { tooltip: vTooltip },
    template: `
    <Button 
      v-tooltip="{
        triggerContent: '<div>Hello World!</div>',
        text: 'Directive tooltip',
        autoHide: false,
        placement: 'right',
        offset: 30,
        }" 
    >
      This hidden
    </Button>
    `,
  };
};

const defaultArgs = {
  placement: {
    control: {
      type: 'select',
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
    },
    defaultValue: 'top',
  },
  text: {
    control: {
      type: 'text',
    },
    defaultValue:
      'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
  },
  dark: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  },
  light: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  triggers: {
    control: {
      type: 'select',
      options: ['hover', 'click', 'manual'],
    },
    defaultValue: 'hover',
  },
  autoHide: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  hideDelay: {
    control: {
      type: 'number',
    },
    defaultValue: 3000,
  },
  showDelay: {
    control: {
      type: 'number',
    },
    defaultValue: 0,
  },
  shown: {
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
  offset: {
    control: {
      type: 'range',
    },
    defaultValue: 12,
  },
  padding: {
    control: {
      type: 'range',
    },
    defaultValue: 0,
  },
  outsideClick: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
  resizable: {
    control: {
      type: 'boolean',
    },
    defaultValue: false,
  },
};

export default {
  title: 'Components/Tooltip',
  component: Tooltip,

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
    buttonContent: 'Hover me',
  },
};

export const Defaultt = {
  render: Default.bind({}),
  name: 'Default',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    buttonContent: 'Hover me',
  },
};

export const WithClickTrigger = {
  render: ToggleTemplate.bind({}),
  name: 'With Click Trigger',

  argTypes: {
    ...ToggleTemplate.argTypes,
  },

  args: {
    triggers: 'click',
    text: 'Clicked!',
    outsideClick: true,
  },
};

export const WithManualTrigger = {
  render: Default.bind({}),
  name: 'With Manual Trigger',

  argTypes: {
    ...Default.argTypes,
  },

  args: {
    triggers: 'manual',
    dark: false,
    light: true,
    text: 'Manual!',
    buttonContent: 'Toggle Shown',
  },
};

export const WithContentSlott = {
  render: WithContentSlot.bind({}),
  name: 'With Content Slot',

  argTypes: {
    ...WithContentSlot.argTypes,
  },

  args: {
    text: '',
    triggers: 'hover',
  },
};

export const WithDirectivess = {
  render: WithDirectives.bind({}),
  name: 'With directives',
  argTypes: {},

  parameters: {
    controls: {
      disable: true,
    },
  },
};
