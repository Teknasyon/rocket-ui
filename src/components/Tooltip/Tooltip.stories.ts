import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../Button/RButton.vue'
import Icon from '../Icon/RIcon.vue'
import { vTooltip } from '../../directives'
import Tooltip from './RTooltip.vue'

const DefaultArgTypes = {
  placement: {
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
  triggers: {
    type: 'select',
    options: ['hover', 'click', 'manual'],
  },

  offset: {
    control: {
      type: 'range',
    },
  },
  padding: {
    control: {
      type: 'range',
    },
    defaultValue: 0,
  },
}

const DefaultArgs = {
  placement: 'top',
  text: 'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
  dark: true,
  light: false,
  triggers: 'hover',
  autoHide: false,
  hideDelay: 3000,
  showDelay: 0,
  shown: false,
  disabled: false,
  persistent: false,
  offset: 12,
  padding: 0,
  outsideClick: false,
  resizable: false,
}

const TooltipStory = {
  title: 'Components/Tooltip',
  render: (args: any) => ({
    components: { Tooltip, Button },
    setup: () => {
      return {
        args,
      }
    },
    template: `
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <Button>Tooltip</Button>
    </Tooltip>
    `,
  }),
  argTypes: { ...DefaultArgTypes },
  args: { ...DefaultArgs },
  decorators: [
    () => ({ template: '<div style="padding: 6rem; display:grid; place-items: center; height:100%;"><story /></div>' }),
  ],
} as Meta<typeof Tooltip>

export default TooltipStory

type Story = StoryObj<typeof TooltipStory>

const WithContentSlotStory = {
  render: (args: any) => ({
    components: { Tooltip, Icon },
    setup() {
      return {
        args,
      }
    },
    template: `
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <Icon name="mdiInformation" />
      <template #content>
        <span style="background: red; color: #fff; padding: 8px;">This is a tooltip</span>
      </template>
    </Tooltip>
    `,
  }),
}

const ToggleTemplate = {
  render: (args: any) => ({
    components: { Tooltip },
    setup() {
      return {
        args,
      }
    },
    template: `
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <span>Toggle tooltip</span>
    </Tooltip>
    `,
  }),
}

const WithDirectivesStory = {
  render: (args: any) => ({
    components: { Button },
    directives: { tooltip: vTooltip },
    setup: () => ({
      args,
    }),
    template: `
    <div 
      v-tooltip="{
        triggerContent: '<div>Hello World!</div>',
        text: 'Directive tooltip',
        autoHide: false,
        placement: 'right',
        offset: 30,
        }" 
      
      />
    `,
  }),
  args: {},
}

export const Overview: Story = {
  args: {},
}

export const Default: Story = {
  args: {},
}

export const WithClickTrigger: Story = {
  render: ToggleTemplate.render,

  args: {
    triggers: 'click',
    text: 'Clicked!',
    outsideClick: true,
  },
}

export const WithContentSlot: Story = {
  render: WithContentSlotStory.render,

  args: {
    text: '',
    triggers: 'hover',
  },
}

export const WithDirectives: Story = {
  render: WithDirectivesStory.render,

  parameters: {
    controls: {
      disable: true,
    },
  },
}
