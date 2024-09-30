<script setup lang="ts">
import type { QueryField } from '@/types'
import { useQuizConfigStore } from '@/stores'

const props = defineProps<{
  fieldName: QueryField
  optionsData: [string, string][]
}>()

const quizConfigStore = useQuizConfigStore()
</script>

<template>
  <div class="form__buttons">
    <button
      v-for="option in optionsData"
      @click.prevent="quizConfigStore.$patch({ [fieldName]: option[0] })"
      :key="option[0]"
      :class="{
        form__button: true,
        'form__rounded-button': fieldName === 'amount',
        'active-option': option[0] === quizConfigStore[fieldName]
      }"
    >
      {{ option[1] }}
    </button>
  </div>
</template>

<style scoped>
.form__buttons {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.form__button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 256px;
  height: 64px;
  border-radius: 30px;
  border: 4px solid transparent;

  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-align: center;

  background-color: #42b983;
  transition:
    500ms border-color,
    500ms background-color,
    500ms color;
}

.form__rounded-button {
  width: 64px;
  border-radius: 100%;
}

.active-option {
  background-color: #fff;
  border-color: #42b983;
  color: #383d3b;
  scale: 1.1;
}
</style>
