import type { Meta, StoryObj } from '@storybook/vue3';

import ItemGroup from './RItemGroup.vue';
import Item from './RItem.vue';

const ItemGroupStory = {
  title: 'Selections/ItemGroup',
  component: ItemGroup,
  setup(args: typeof ItemGroup) {
    return { args };
  },
  tags: ['autodocs'],
  argTypes: {
    default: {
      description: 'Slot for the items',
      table: {
        type: {
          summary: JSON.stringify({
            select: '(id: number, value: boolean) => void',
            isSelected: '(id: number) => boolean',
            selected: 'number[]',
          }),
        },
      },
    },
    itemProps: {
      table: {
        category: 'component',
        type: {
          summary: JSON.stringify({
            value: 'number',
            disabled: 'boolean',
            selectedClass: 'string',
          }),
        },
      },
    },
    itemSlot: {
      table: {
        category: 'component',
        type: {
          summary: JSON.stringify({
            isSelected: '(id: number) => boolean',
            value: 'number',
            selectedClass: 'string',
            disabled: 'boolean',
            select: '(id: number, value: boolean) => void',
            toggle: '(id: number) => void',
          }),
        },
      },
    },
  },
} as Meta<typeof ItemGroup>;

export default ItemGroupStory;

type Story = StoryObj<typeof ItemGroupStory>;

export const Overview: Story = {
  render: (args: any) => ({
    components: { ItemGroup, Item },
    setup() {
      return { args, selected: [] };
    },
    template: `
      <ItemGroup v-model="selected" selectedClass="bg-blue-500 text-white">
        <div class="flex gap-2">
          <Item
          v-for="i in 5"
          :key="i"
          :value="i"
          :disabled="i === 3"
          v-slot="{ isSelected, toggle, disabled, selectedClass }"
        >
          <div
            :class="[
              'p-2 border border-gray-300 rounded cursor-pointer',
              isSelected ? selectedClass : 'bg-white',
              disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100',
            ]"
            @click="toggle"
          >
            <div>{{ isSelected ? 'Selected' : 'Click Me!' }}</div>
          </div>
        </Item>
      </div>
      </ItemGroup>
    `,
  }),
};
