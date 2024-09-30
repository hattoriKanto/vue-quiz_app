<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from '@/modules/Header/Header.vue'
import Container from '@/ui/Container.vue'
</script>

<template>
  <Header />
  <main class="main">
    <Container>
      <RouterView />
    </Container>
  </main>
</template>

<style scoped>
.main {
  padding-block: 60px;
}
</style>
