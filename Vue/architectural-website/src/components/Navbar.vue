<script setup>
import logo from '@/assets/img/company-logo.png';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}

// State for toggling the menu
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-primary text-white shadow-md">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img :src="logo" alt="Company Logo" class="h-10 w-auto" />
        <span class="ml-3 text-xl font-bold">Architectural Co.</span>
      </router-link>

      <!-- Mobile Menu Toggle Button -->
      <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <router-link
            to="/"
            :class="[
            isActiveLink('/') ? 'border-b-2 border-accent' : '',
            'hover:text-accent transition'
          ]"
        >
          Home
        </router-link>
        <router-link
            to="/projects"
            :class="[
            isActiveLink('/projects') ? 'border-b-2 border-accent' : '',
            'hover:text-accent transition'
          ]"
        >
          Projects
        </router-link>
        <router-link
            to="/contact"
            :class="[
            isActiveLink('/contact') ? 'border-b-2 border-accent' : '',
            'hover:text-accent transition'
          ]"
        >
          Contact
        </router-link>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
        :class="[
        isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        'fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-transform transform'
      ]"
        @click="toggleMenu"
    >
      <div
          class="absolute top-0 right-0 bg-primary w-3/4 h-full p-6 flex flex-col items-center space-y-6"
          @click.stop
      >
        <router-link
            to="/"
            @click="toggleMenu"
            :class="[
            isActiveLink('/') ? 'border-b-2 border-accent' : '',
            'hover:text-accent transition'
          ]"
        >
          Home
        </router-link>
        <router-link
            to="/projects"
            @click="toggleMenu"
            :class="[
            isActiveLink('/projects') ? 'border-b-2 border-accent' : '',
            'hover:text-accent transition'
          ]"
        >
          Projects
        </router-link>
        <router-link
            to="/contact"
            @click="toggleMenu"
            :class="[
            isActiveLink('/contact') ? 'border-b-2 border-accent' : '',
            'hover:text-accent transition'
          ]"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-family: 'Roboto', sans-serif;
}
</style>
