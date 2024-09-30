<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <p class="description">{{ text }}</p>
</template>

<style scoped>
.description {
  text-align: center;
  font-size: 36px;
  line-height: 48px;
}
</style>
