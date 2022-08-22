<script setup lang="ts">
import { Button } from '../dist/design-system-vue.js';

const onClick = () => {
  console.log('Hello World');
};
</script>

<template>
  <Button variant="primary" size="large" @click="onClick">Primary</Button>
</template>
