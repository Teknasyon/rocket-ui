<script setup lang="ts">
import { reactive, computed } from 'vue';
import './dropdown.css';
import Button from '../Button/Button.vue';
import Textfield from '../Textfield/Textfield.vue';
import Checkbox from '../Checkbox/Checkbox.vue';

export interface Props {
  options: string[];
  selected: string[];
  multiple?: boolean;
  searchable?: boolean;
  actions?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
});
const emit = defineEmits(['select', 'cancel']);
const state = reactive({
  shown: false,
  search: '',
  selected: props.selected || [],
  options: props.options || [],
});
const filteredOptions = computed(() => {
  return state.options.filter((option) => {
    return option.text.toLowerCase().includes(state.search.toLowerCase());
  });
});
const onSearch = (e: { value: string }) => {
  state.search = e.value;
};
const onSelect = (value: string) => {
  if (props.multiple) {
    if (state.selected.includes(value)) {
      state.selected = state.selected.filter((item) => item !== value);
      return;
    }
    state.selected.push(value);
  } else {
    state.selected = [value];
  }

  emit('select', state.selected);
};
</script>
<template>
  <div class="list">
    <div v-if="props.searchable" class="list__header">
      <Textfield
        id="search"
        v-model="state.search"
        placeholder="Search"
        class="list__search"
        @input="onSearch"
      />
    </div>
    <div class="list__body">
      <div class="list__items">
        <p v-if="filteredOptions.length === 0">No results found!!</p>
        <div
          v-else
          v-for="{ text, value } in filteredOptions"
          :key="value"
          class="list__item"
        >
          <Checkbox
            v-if="props.multiple"
            :id="value"
            :label="text"
            class="item-multiple"
            :class="{ 'list-item--selected': state.selected.includes(value) }"
            @change="onSelect(value)"
          />
          <p
            v-else
            :id="value"
            class="item-single"
            :class="{ 'list-item--selected': state.selected.includes(value) }"
            @click="onSelect(value)"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="props.actions" class="list__footer">
      <Button
        class="footer__cancel"
        size="small"
        variant="outline"
        @click="emit('cancel')"
      >
        Cancel
      </Button>
      <Button class="footer__submit" size="small" variant="primary">
        Submit
      </Button>
    </div>
  </div>
</template>
