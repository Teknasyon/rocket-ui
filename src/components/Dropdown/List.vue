<script setup lang="ts">
import './dropdown.css';
import Button from '../Button/Button.vue';
</script>
<template>
  <div class="list">
    <div>head</div>
    <hr />
    <div>body</div>
    <hr />
    <div class="list__footer">
      <Button
        class="footer__btn1"
        icon="PlusCircleIcon"
        size="small"
        variant="outline"
        >button</Button
      >
      <Button class="footer__btn2" size="small" variant="primary"
        >Submit</Button
      >
    </div>
  </div>
</template>
