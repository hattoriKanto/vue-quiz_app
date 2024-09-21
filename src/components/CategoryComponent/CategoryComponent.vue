<script setup lang="ts">
const props = defineProps({
  name: String,
  imageName: String
})

const imagePath = `/images/category/${props.imageName}.svg`
</script>

<template>
  <article class="category">
    <div class="category__wrapper">
      <div class="category__image-wrapper">
        <img class="category__image" :src="imagePath" alt="" />
      </div>
      <h2 class="category__title">{{ props.name }}</h2>
    </div>
  </article>
</template>

<style scoped>
.category {
  min-height: 240px;
  scale: 1;
  transition: 0.5s scale;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 10px;
}

.category__wrapper {
  padding: 12px;
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
  color: black;
  text-align: center;
}

.category:hover,
.category:focus,
.category:active {
  scale: 1.05;
}
</style>
