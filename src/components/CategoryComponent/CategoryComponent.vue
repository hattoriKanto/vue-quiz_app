<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { ICategory } from '@/types'

const props = defineProps<{
  category: ICategory
}>()

const URL = `/category/${props.category.id}/config`
const imagePath = `/images/category/${props.category.imageName}.svg`
</script>

<template>
  <article class="category">
    <RouterLink :to="URL" class="category__wrapper">
      <div class="category__image-wrapper">
        <img class="category__image" :src="imagePath" :alt="category.imageName" />
      </div>
      <h2 class="category__title">{{ category.name }}</h2>
    </RouterLink>
  </article>
</template>

<style scoped>
.category {
  min-height: 240px;
  border: 4px solid black;
  border-radius: 10px;

  background-color: #42b983;

  scale: 1;
  transition:
    500ms scale,
    500ms background-color,
    500ms border-color;
  cursor: pointer;
}

.category__wrapper {
  padding: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.category__image-wrapper {
  padding: 12px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: white;
  border: 2px solid black;
}

.category__image {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
}

.category__title {
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  transition: 500ms color;
}

.category:hover,
.category:focus,
.category:active {
  background-color: #fff;
  border-color: #42b983;
  scale: 1.05;

  .category__title {
    color: black;
  }
}
</style>
