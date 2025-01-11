<script setup>

</script>

<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <Card>
          <h2 class="text-2xl font-bold mb-4">Residential Projects</h2>
          <p>
            Transform your home with our innovative and personalized designs.
          </p>
          <router-link
              to="/projects"
              class="mt-4 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-accent"
              >
            View Projects
          </router-link>
        </Card>

        <!-- Card 2 -->
        <Card>
          <h2 class="text-2xl font-bold mb-4">Commercial Projects</h2>
          <p>
            Build inspiring spaces that drive business success.
          </p>
          <router-link
              to="/projects"
              class="mt-4 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-accent"
          >
            Learn More
          </router-link>
        </Card>

        <!-- Card 3 -->
        <Card>
          <h2 class="text-2xl font-bold mb-4">Interior Design</h2>
          <p>
            Enhance your space with modern and functional interiors.
          </p>
          <router-link
              to="/projects"
              class="mt-4 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-accent"
          >
            Explore Designs
          </router-link>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: 'Roboto', sans-serif;
}
</style>