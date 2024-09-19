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
  min-height: 240px;
  scale: 1;
  transition: 0.5s scale;
  cursor: pointer;
}

.category__wrapper {
  height: 100%;
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
  z-index: 1;
  filter: brightness(0.4);
}

.category__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  color: white;
  z-index: 2;
}

.category:hover,
.category:focus,
.category:active {
  scale: 1.05;
}
</style>
