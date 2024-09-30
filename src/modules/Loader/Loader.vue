<script setup lang="ts">
import LoadingMessage from './ui/LoadingMessage.vue'

defineProps<{
  text: string
}>()
</script>

<template>
  <div class="loader__wrapper">
    <div class="loader" />
    <LoadingMessage :text="text" />
  </div>
</template>

<style scoped>
.loader__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader {
  margin: 48px auto 0 auto;
  width: 80px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #42b983;
  animation: l15 1s infinite linear;
}
.loader::before,
.loader::after {
  content: '';
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: l15 2s infinite;
}
.loader::after {
  margin: 8px;
  animation-duration: 3s;
}
@keyframes l15 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
