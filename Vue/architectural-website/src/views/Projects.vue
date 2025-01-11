<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import axios from 'axios';

const projects = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const res = await axios.get('/api/projects');
    projects.value = res.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto">
      <!-- Header Section -->
      <header class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-primary mb-4">
          Our Architectural Projects
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our innovative and meticulously crafted designs that
          redefine modern living and elevate architectural standards.
        </p>
      </header>

      <!-- Loader -->
      <div v-if="isLoading" class="text-center py-16">
        <span class="loader"></span>
        <p class="mt-4 text-gray-600">Loading projects...</p>
      </div>

      <!-- Project Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Color Variables */
:root {
  --primary-color: #0a192f; /* Deep blue for premium feel */
  --accent-color: #ff6f00; /* Vibrant orange for contrast */
  --secondary-color: #233554; /* Complementary dark blue */
}

/* Typography */
.text-primary {
  color: var(--primary-color);
}

/* Loader Styles */
.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid var(--primary-color);
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Section Styling */
section {
  font-family: 'Roboto', sans-serif;
}

/* Header Styling */
header h1 {
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

header p {
  font-size: 1.125rem; /* Larger text for readability */
  line-height: 1.8;
}
</style>
