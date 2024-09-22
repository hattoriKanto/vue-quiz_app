<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue'
import ContainerComponent from './components/ContainerComponent/ContainerComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main class="main">
    <ContainerComponent>
      <RouterView />
    </ContainerComponent>
  </main>
</template>

<style scoped>
.main {
  padding-block: 120px;
}
</style>
