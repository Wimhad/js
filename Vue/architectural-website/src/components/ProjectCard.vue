<script setup>
import { defineProps } from 'vue';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg transform transition hover:scale-105">
    <img
        :src="project.image"
        alt="Project Image"
        class="w-full h-48 object-cover rounded-t-lg"
    />
    <div class="p-6">
      <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
      <p class="text-gray-600">{{ project.description }}</p>
      <router-link
          :to="`/projects/${project.id}`"
          class="mt-4 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-accent"
      >
        View Details
      </router-link>
    </div>
  </div>

  <!--  <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img
          :src="project.image"
          alt="Project Image"
          class="w-full h-48 object-cover"
      />
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600">{{ project.description }}</p>
        <router-link
            :to="`/projects/${project.id}`"
            class="mt-4 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-accent"
            >
          View Details
        </router-link>
      </div>
    </div>-->
</template>

<style scoped>
div {
  transition: box-shadow 0.3s ease;
}

div:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
</style>