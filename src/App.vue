<script setup lang="ts">
import { HelloWorld, Button } from '../dist/design-system-vue.js';

const onClick = () => {
  console.log('Hello World');
};
</script>

<template>
  <HelloWorld msg="ben kit" class="text-3xl font-bold underline" />
  <Button
    label="Hello World from Button"
    type="primary"
    size="large"
    @click="onClick"
  />
</template>
