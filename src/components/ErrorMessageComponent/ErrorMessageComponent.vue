<script setup lang="ts"></script>

<template>
  <div class="error">
    <img class="error__image" src="/images/error.svg" alt="Sad Face" />
    <p class="error__message">No categories found...</p>
  </div>
</template>

<style scoped>
.error {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.error__message {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
}

.error__image {
  width: 256px;
  height: auto;
}
</style>
