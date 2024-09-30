<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <p class="loader__message">{{ text }}</p>
</template>

<style scoped>
.loader__message {
  margin-top: 20px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
}
</style>
