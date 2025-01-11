<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import BackButton from '@/components/BackButton.vue';

const route = useRoute();
const project = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  try {
    // Mock API call
    const res = await axios.get(`/api/projects/${route.params.id}`);
    // const projectList = res.data;
    // project.value = projectList.find((p) => p.id === route.params.id);
    project.value = res.data;
  } catch (error) {
    console.error('Error fetching project details:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section v-if="!isLoading" class="py-12 bg-gray-100">
    <div class="container mx-auto">
      <BackButton :to="'/projects'" :text="'Back to Projects'" />

      <!-- Project Details -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <!-- Image Section -->
        <div class="col-span-1">
          <img
              :src="project.image"
              alt="Project Image"
              class="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <!-- Content Section -->
        <div class="col-span-2 bg-white p-8 rounded-lg shadow-md">
          <h1 class="text-4xl font-bold mb-4 text-primary">
            {{ project.title }}
          </h1>
          <p class="text-gray-700 mb-6 text-lg">{{ project.description }}</p>

          <h2 class="text-2xl font-bold text-accent mb-4">Project Details</h2>
          <ul class="text-gray-600">
            <li
                v-for="(detail, key) in project.details"
                :key="key"
                class="mb-2 flex items-start"
            >
              <span class="font-bold capitalize text-primary w-1/4">
                {{ key }}:
              </span>
              <span class="w-3/4">{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Loader -->
  <div v-else class="text-center py-12">
    <span class="loader"></span>
    <p>Loading project details...</p>
  </div>
</template>

<style scoped>
/* Primary and Accent Colors */
:root {
  --primary-color: #1a237e;
  --accent-color: #ff6f00;
}

.text-primary {
  color: var(--primary-color);
}

.text-accent {
  color: var(--accent-color);
}

/* Loader Styles */
.loader {
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid var(--primary-color);
  width: 40px;
  height: 40px;
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

/* Custom Styling */
.container {
  max-width: 1200px;
}

img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.03);
}

ul li {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

ul li:last-child {
  border-bottom: none;
}
</style>
