import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from '../Icon/RIcon.vue'
import Alert from './RAlert.vue'

const DefaultArgs = {
  type: 'success',
  title: 'Alert Title',
  variant: 'ghost',
  description: '',
  closable: true,
  closeText: 'Close',
  block: false,
}

const DefaultArgTypes = {
  type: {
    type: 'select',
    options: ['success', 'info', 'warning', 'error'],
  },
  variant: {
    type: 'select',
    options: ['outline', 'solid', 'ghost'],
  },
  onClose: {
    action: 'close',
  },
}

const AlertStory = {
  component: Alert,
  setup: (args: typeof Alert) => {
    return { args }
  },
  template: '<Alert v-bind="args" @close="click"/>',
  args: DefaultArgs,
  argTypes: DefaultArgTypes,
} as Meta<typeof Alert>

export default AlertStory

type Story = StoryObj<typeof AlertStory>

export const Overview: Story = {
  args: {
    type: 'success',
    title: 'Alert Title',
    description:
      'A type of alert which appears in a layer above other content, visually similar to a mobile or desktop push notification.',
  },
}

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    description:
      'Success Variant! This is a short but descriptive message that indicates a successful action.',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    description:
      'Error Variant! This is a short but descriptive message that indicates a negative action.',
  },
}

export const Information: Story = {
  args: {
    type: 'info',
    title: 'Info',
    description:
      'Info Variant! This is a short but descriptive message that indicates a neutral informative action.',
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    description:
      'Warning Variant! This is a short but descriptive message that indicates a negative or dangerous action.',
  },
}

export const OnlyTitle: Story = {
  args: {
    type: 'success',
    title: 'Only Title',
  },
}

export const CustomCloseButton = {

  render: (args: any) => ({
    components: { Alert, Icon },
    setup: () => {
      return { args }
    },
    template: `
    <Alert
      v-bind="args"
    >
      <template #custom-close>
        <Icon name="mdiClose" />
      </template>
    </Alert>
    `,
  }),
  args: {
    type: 'info',
    title: 'With a custom button',
    description:
      'This alert box looks very similar to our default examples but it contains a custom close button in it!',
  },
}
