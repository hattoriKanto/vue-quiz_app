<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useQuestionsStore } from '@/stores'
import { onMounted } from 'vue'

const router = useRouter()
const questionId = ref<string>(router.currentRoute.value.params.questionId as string)
const answers = ref<string[]>([])
const questionsStore = useQuestionsStore()
const currentURL = router.currentRoute.value.fullPath

const handleNextPage = () => {
  if (Number(questionId.value) === questionsStore.questions.length) {
    router.push('/')
    questionsStore.$reset()
    return
  }

  questionId.value = String(Number(questionId.value) + 1)

  const params = currentURL.split('/')
  params[params.length - 1] = questionId.value
  const newUrl = params.join('/')

  console.log(newUrl)

  router.push(newUrl)
}

onMounted(() => {
  console.log(questionsStore.questions)
  const currentQuestion = questionsStore.questions[Number(questionId.value) - 1]
  const { incorrect_answers, correct_answer } = currentQuestion
  const combinedAnswers = incorrect_answers
  const randomIndex = Math.floor(Math.random() * combinedAnswers.length)
  combinedAnswers.splice(randomIndex, 0, correct_answer)
  answers.value = combinedAnswers
})

watch(questionId, () => {
  const currentQuestion = questionsStore.questions[Number(questionId.value) - 1]
  const { incorrect_answers, correct_answer } = currentQuestion
  const combinedAnswers = incorrect_answers
  const randomIndex = Math.floor(Math.random() * combinedAnswers.length)
  combinedAnswers.splice(randomIndex, 0, correct_answer)
  answers.value = combinedAnswers
})
</script>

<template>
  <section class="question">
    <div class="question__wrapper">
      <h1 class="question__title">
        {{ questionsStore.questions[Number(questionId) - 1].question }}
      </h1>
      <div class="question__answers">
        <button v-for="(answer, index) in answers" :key="index" class="question__answers-button">
          {{ answer }}
        </button>
      </div>
    </div>
    <button @click="handleNextPage" class="question__next">
      {{ Number(questionId) === questionsStore.questions.length ? 'Result!' : 'Next!' }}
    </button>
  </section>
</template>

<style scoped></style>
