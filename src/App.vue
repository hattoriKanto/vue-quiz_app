<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue'
import ContainerComponent from './components/ContainerComponent/ContainerComponent.vue'
import WelcomePage from './views/WelcomePage.vue'
import CategoriesPage from './views/CategoriesPage.vue'
</script>

<template>
  <HeaderComponent />
  <main class="main">
    <ContainerComponent>
      <WelcomePage />
      <CategoriesPage />
    </ContainerComponent>
  </main>
</template>

<style scoped>
.main {
  padding-block: 120px;
}
</style>
