<script setup lang="ts"></script>

<template>
  <article class="category">
    <div class="category__wrapper">
      <img class="category__image" src="/images/animals.jpg" alt="" />
      <h2 class="category__title">Animals</h2>
    </div>
  </article>
</template>

<style>
.category {
  border-radius: 10px;
}

.category__wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}

.category__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
}
</style>
