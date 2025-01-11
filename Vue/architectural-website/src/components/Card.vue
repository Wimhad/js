<script setup>
import { defineProps } from 'vue';

defineProps({
  bg: {
    type: String,
    default: 'bg-white',
  },
});
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  transition: transform 0.3s ease;
}

div:hover {
  transform: scale(1.05);
}
</style>