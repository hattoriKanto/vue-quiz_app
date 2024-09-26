<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizConfigStore, useQuestionsStore } from '@/stores'
import { fetchQuestionsByCategoryID } from '@/api'
import { Amount, Difficulty, Questions } from '@/utils'
import LoaderComponent from '@/components/LoaderComponent/LoaderComponent.vue'

const amountArray = Object.entries(Amount)
const difficultyArray = Object.entries(Difficulty)
const questionsArray = Object.entries(Questions)

const isLoading = ref<boolean>(false)

const quizConfigStore = useQuizConfigStore()
const questionsStore = useQuestionsStore()
const router = useRouter()
const categoryId = Number(router.currentRoute.value.params.categoryId as string)

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  isLoading.value = true
  const questions = await fetchQuestionsByCategoryID(categoryId, quizConfigStore.$state)
  questionsStore.$patch({ questions: questions.results })
  isLoading.value = false
  router.push(`/category/${categoryId}/questions/1`)
  quizConfigStore.$reset()
}

const handleReset = async (event: Event) => {
  event.preventDefault()
  router.push('/category')
  quizConfigStore.$reset()
}
</script>

<template>
  <section class="config">
    <div v-if="isLoading" class="config__wrapper">
      <LoaderComponent />
      <p class="config__message">Generating...</p>
    </div>
    <div v-if="!isLoading" class="config__wrapper">
      <h1 class="config__title">Customise your quiz:</h1>
      <form @submit="handleSubmit" @reset="handleReset" class="config__form form">
        <div class="form__level">
          <h2 class="form__title">Choose difficulty:</h2>
          <div class="form__buttons">
            <button
              v-for="option in difficultyArray"
              @click.prevent="quizConfigStore.$patch({ difficulty: option[0] })"
              :key="option[0]"
              :class="{
                form__button: true,
                'active-option': option[0] === quizConfigStore.difficulty
              }"
            >
              {{ option[1] }}
            </button>
          </div>
        </div>
        <div class="form__questions">
          <h2 class="form__title">Choose question's type:</h2>
          <div class="form__buttons">
            <button
              v-for="option in questionsArray"
              @click.prevent="quizConfigStore.$patch({ type: option[0] })"
              :key="option[0]"
              :class="{ form__button: true, 'active-option': option[0] === quizConfigStore.type }"
            >
              {{ option[1] }}
            </button>
          </div>
        </div>
        <div class="form__amount">
          <h2 class="form__title">Choose amount of questions:</h2>
          <div class="form__buttons">
            <button
              v-for="option in amountArray"
              @click.prevent="quizConfigStore.$patch({ amount: option[0] })"
              :key="option[0]"
              :class="{
                'form__button form__rounded-button': true,
                'active-option': option[0] === quizConfigStore.amount
              }"
            >
              {{ option[1] }}
            </button>
          </div>
        </div>
        <div class="form__buttons">
          <button type="submit" class="form__button">Generate!</button>
          <button type="reset" class="form__button form__back">Back</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.config__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.config__form {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.config__message {
  margin-top: 48px;
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
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

.form__link {
  color: #fff;
}

.form__buttons {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.form__back {
  background-color: #e63462;
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

.form__button:hover,
.form__button:focus,
.form__button:active {
  background-color: #fff;
  border-color: #42b983;
  color: #383d3b;

  a {
    color: #383d3b;
  }
}
</style>
