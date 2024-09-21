<script setup lang="ts">
import WelcomePage from './views/WelcomePage.vue'
import CategoriesPage from './views/CategoriesPage.vue'
</script>

<template>
  <main class="main">
    <div class="container">
      <WelcomePage />
      <CategoriesPage />
    </div>
  </main>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding-inline: 12px;
  max-width: 1200px;
}
</style>
