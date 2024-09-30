<script setup lang="ts">
import type { QueryField } from '@/types'
import { Amount, Difficulty, Questions } from '@/utils'
import ConfigOptions from './components/ConfigOptions/ConfigOptions.vue'

const amountArray = Object.entries(Amount)
const difficultyArray = Object.entries(Difficulty)
const questionsArray = Object.entries(Questions)

const handleSubmit = async (event: Event) => {
  isLoading.value = true
  const questions = await fetchQuestionsByCategoryID(categoryId, quizConfigStore.$state)
  questionsStore.$patch({ questions: questions.results })
  isLoading.value = false
  router.push(`/category/${categoryId}/questions/1`)
  quizConfigStore.$reset()
}

const handleReset = async (event: Event) => {
  router.push('/category')
  quizConfigStore.$reset()
}
</script>

<template>
  <form @submit.prevent="handleSubmit" @reset.prevent="handleReset" class="config__form form">
    <div class="form__level">
      <h2 class="form__title">Choose difficulty:</h2>
      <ConfigOptions :field-name="'difficulty' as QueryField" :options-data="difficultyArray" />
    </div>
    <div class="form__questions">
      <h2 class="form__title">Choose question's type:</h2>
      <ConfigOptions :field-name="'type' as QueryField" :options-data="questionsArray" />
    </div>
    <div class="form__amount">
      <h2 class="form__title">Choose amount of questions:</h2>
      <ConfigOptions :field-name="'amount' as QueryField" :options-data="amountArray" />
    </div>
    <div class="form__buttons">
      <button type="submit" class="form__button">Generate!</button>
      <button type="reset" class="form__button form__back">Back</button>
    </div>
  </form>
</template>

<style scoped></style>
