import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'

import Dropdown from './RDropdown.vue'

const DefaultArgs = {
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: '7' },
    { value: '8', label: 'Option 8' },
    { value: '9', label: 'Option 9' },
    { value: '10', label: 'Option 10' },
  ],
  placeholder: 'Select an option',
  taggable: false,
  multiple: false,
  disabled: false,
  loading: false,
  prependIcon: 'mdiFaceMan',
  appendIcon: 'mdiChevronDown',
  modelValue: '',
  searchable: false,
}
const DropdownStory = {
  title: 'Form/Dropdown',
  component: Dropdown,
  setup: (args: typeof Dropdown) => ({
    args,
    update: action('update:modelValue'),
  }),
  template: `
    <Dropdown v-bind="args" @update="update" />
  `,
  args: DefaultArgs,
  argTypes: {
    'onUpdate:modelValue': { action: 'update:modelValue' },
  },
} as Meta<typeof Dropdown>

export default DropdownStory

type Story = StoryObj<typeof DropdownStory>

export const Overview: Story = {
  args: {
    appendIcon: 'mdiChevronDown',
  },
}

export const Multiple: Story = {
  args: {
    multiple: true,
    placeholder: 'Select multiple options',
    appendIcon: 'mdiChevronDown',
  },
}

export const Taggable: Story = {
  args: {
    taggable: true,
    placeholder: 'Search or create a tag',
    appendIcon: 'mdiChevronDown',
  },
}

export const Search: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: '4', label: 'Option 4' },
    ],
    placeholder: 'Search',
    prependIcon: 'mdiMagnify',
    appendIcon: 'mdiChevronDown',
    searchable: true,
  },
}
