<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCategories } from '@/api'
import { createCategories, ERRORS } from '@/utils'
import type { ICategory } from '@/types'
import Loader from '@/modules/Loader/Loader.vue'
import ErrorMessageComponent from '@/components/ErrorMessageComponent/ErrorMessageComponent.vue'
import CategoryComponent from '@/components/CategoryComponent/CategoryComponent.vue'
import { loadingMessage, descriptionText, titleText } from '@/texts'
import Text from '@/modules/Text/Text.vue'

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
      <Text :title="titleText.categories" :description="descriptionText.categories" />
      <Loader v-if="isLoading" :text="loadingMessage.loading" />
      <ErrorMessageComponent v-if="!isLoading && !isDataValid" />
      <div v-if="!isLoading && isDataValid" class="categories__cards">
        <CategoryComponent v-for="category in categories" :category="category" />
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
  margin-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
</style>
