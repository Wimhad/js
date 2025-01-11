<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="page-container">
    <Navbar />
    <router-view class="router-view" />
    <Footer />
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.router-view {
  flex-grow: 1; /* Ensures the main content takes up the available space */
}

body {
  font-family: 'Roboto', Arial, sans-serif;
  background-color: #f5f5f5;
}
</style>
