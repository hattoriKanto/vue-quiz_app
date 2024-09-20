<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCategories } from './api'
import CategoryComponent from './components/CategoryComponent/CategoryComponent.vue'
import type { ICategory } from './types'

const categories = ref<ICategory[]>([])

onMounted(async () => {
  const result = await fetchCategories()
  categories.value = result.trivia_categories
})
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="categories">
        <div class="categories__wrapper">
          <h1 class="categories__title">Choose category to start:</h1>
          <div class="categories__cards">
            <CategoryComponent
              v-for="category in categories"
              :key="category.id"
              :name="category.name"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding-inline: 12px;
  max-width: 1200px;
}

.categories__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.categories__cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
</style>
