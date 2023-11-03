import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from '../Icon/RIcon.vue'
import Badge from './RBadge.vue'

const DefaultArgs = {
  variant: 'primary',
  placement: 'right',
  overlap: false,
  hover: false,
  outside: false,
  animation: false,
  class: '',
}
const DefaultArgTypes = {
  variant: {
    type: 'select',
    options: ['primary', 'success', 'error', 'warning', 'neutral'],
  },
  placement: {
    type: 'select',
    options: ['right', 'bottom', 'left'],
  },
  onClick: {
    action: 'click',
  },
}

const BadgeStory = {
  title: 'Components/Badge',
  render: (args: any) => ({
    components: { Badge, Icon },
    setup: () => {
      return { args }
    },
    template: `
    <Badge v-bind="args">
      <template v-slot:default>
        <Icon name="mdiBell" size="24" />
      </template>
    </Badge>
    `,
    args: DefaultArgs,
    argTypes: DefaultArgTypes,
  }),
} as Meta<typeof Badge>

export default BadgeStory

type Story = StoryObj<typeof BadgeStory>

export const Overview: Story = {
  args: {
    ...DefaultArgs,
    placement: 'right',
  },
}

export const Hover: Story = {
  args: {
    ...DefaultArgs,
    hover: true,
    variant: 'primary',
  },
}

export const Bottom: Story = {
  args: {
    ...DefaultArgs,
    placement: 'bottom',
    variant: 'success',
  },
}

export const Left: Story = {
  args: {
    ...DefaultArgs,
    placement: 'left',
    variant: 'error',
  },
}

export const Overlap: Story = {
  args: {
    ...DefaultArgs,
    overlap: true,
    variant: 'warning',
    animation: true,
  },
}

export const Outside: Story = {
  args: {
    ...DefaultArgs,
    outside: true,
    variant: 'neutral',
  },
}

export const WithAnimation: Story = {
  args: {
    ...DefaultArgs,
    animation: true,
  },
}
