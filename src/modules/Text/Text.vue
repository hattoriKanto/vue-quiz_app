<script setup lang="ts">
import Description from '../../ui/Description.vue'
import Title from '../../ui/Title.vue'

defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <Title :text="title" />
  <Description :text="description" />
</template>

<style scoped></style>
