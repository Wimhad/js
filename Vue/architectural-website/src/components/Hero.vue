<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Designing the Future',
  },
  subtitle: {
    type: String,
    default: 'Innovative architecture that inspires and endures.',
  },
  background: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section
      class="py-20 bg-cover bg-center relative"

  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="container mx-auto text-center text-white relative z-10">
      <h1 class="text-5xl md:text-6xl font-extra-bold">{{ title }}</h1>
      <p class="text-2xl md:text-3xl mt-4">{{ subtitle }}</p>
    </div>
  </section>
<!--  <section
    class="py-20 bg-cover bg-center"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="container mx-auto text-center text-white">
      <h1 class="text-4xl md:text-5xl font-bold">{{ title }}</h1>
      <p class="text-xl md:text-2xl mt-4">{{ subtitle }}</p>
    </div>
  </section>-->
</template>

<style scoped>
section {
  font-family: 'Roboto', sans-serif;
  background-image: url(@/assets/img/hero-background.jpg);
}
</style>