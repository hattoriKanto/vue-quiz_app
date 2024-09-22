<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCategories } from '@/api'
import { createCategories, ERRORS } from '@/utils'
import type { ICategory } from '@/types'
import ErrorMessageComponent from '@/components/ErrorMessageComponent/ErrorMessageComponent.vue'
import LoaderComponent from '@/components/LoaderComponent/LoaderComponent.vue'
import CategoryComponent from '@/components/CategoryComponent/CategoryComponent.vue'

const categories = ref<ICategory[]>([])
const isLoading = ref<boolean>(false)
const isDataValid = ref<boolean>(true)

onMounted(async () => {
  try {
    isLoading.value = true
    const result = await fetchCategories()
    if (!result || !result.trivia_categories) {
      throw new Error(ERRORS.validation)
    }
    const fetchedCategories = result.trivia_categories
    if (fetchedCategories.length === 0) {
      throw new Error(ERRORS.validation)
    }
    categories.value = createCategories(fetchedCategories)
    isLoading.value = false
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message === ERRORS.validation || error.message === ERRORS.fetching)
    ) {
      console.error('An error occurred while checking the categories:', error)
      isDataValid.value = false
    }
    isLoading.value = false
  }
})
</script>

<template>
  <section class="categories">
    <div class="categories__wrapper">
      <h1 class="categories__title">Quiz Categories</h1>
      <p class="categories__description">Choose category and let's start:</p>
      <LoaderComponent v-if="isLoading" />
      <ErrorMessageComponent v-if="!isLoading && !isDataValid" />
      <div v-if="!isLoading && isDataValid" class="categories__cards">
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

.categories__description {
  text-align: center;
  font-size: 36px;
  line-height: 48px;
}

.categories__cards {
  margin-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
</style>
