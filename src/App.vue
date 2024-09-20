<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchCategories } from './api'
import CategoryComponent from './components/CategoryComponent/CategoryComponent.vue'
import type { IFetchedCategory, ICategory } from './types'

const categories = ref<ICategory[]>([])

onMounted(async () => {
  const result = await fetchCategories()
  const fetchedCategories = result.trivia_categories

  const createCategories = (fetchedCategories: IFetchedCategory[]) => {
    const createdCategories = fetchedCategories.reduce((accum, curr) => {
      let imageName = curr.name.split('').reduce((word, char) => {
        if (char.match(/[^\w]|\s/)) {
          word += ''
        } else {
          word += char
        }

        return word
      }, '')
      const category = {
        ...curr,
        imageName
      }

      accum.push(category)

      return accum
    }, [] as ICategory[])

    return createdCategories
  }

  categories.value = createCategories(fetchedCategories)
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
              :image-name="category.imageName"
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
