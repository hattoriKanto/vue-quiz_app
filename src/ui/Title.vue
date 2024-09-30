<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h1
    :class="{
      title: true
    }"
  >
    {{ text }}
  </h1>
</template>

<style scoped>
.title {
  font-size: 64px;
  line-height: 128px;
  font-weight: 700;
}
</style>
