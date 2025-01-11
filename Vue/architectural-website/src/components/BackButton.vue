<script setup>
import { defineProps } from 'vue';

defineProps({
  to: {
    type: String,
    default: '/', // Default route for the back button
  },
  text: {
    type: String,
    default: 'Back to Home', // Default text for the back button
  },
});
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <router-link
          :to="to"
          class="text-primary hover:text-accent flex items-center"
      >
        <i class="pi pi-arrow-circle-left mr-3"></i> {{ text }}
      </router-link>
    </div>
  </section>
</template>

<style scoped>
/* Scoped styles for the back button */
</style>
