<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCategories } from '@/api'
import { createCategories } from '@/utils'
import type { ICategory } from '@/types'
import CategoryComponent from '@/components/CategoryComponent/CategoryComponent.vue'

const categories = ref<ICategory[]>([])

onMounted(async () => {
  const result = await fetchCategories()
  const fetchedCategories = result.trivia_categories
  categories.value = createCategories(fetchedCategories)
})
</script>

<template>
  <section class="categories">
    <div class="categories__wrapper">
      <h1 class="categories__title">Quiz Categories</h1>
      <p class="categories__description">Choose category and let's start:</p>
      <div class="categories__cards">
        <CategoryComponent
          v-for="category in categories"
          :key="category.id"
          :name="category.name"
          :image-name="category.imageName"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
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
