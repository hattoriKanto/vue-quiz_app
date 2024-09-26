<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useQuestionsStore } from '@/stores'
import { onMounted } from 'vue'

const router = useRouter()
const questionId = ref<string>(router.currentRoute.value.params.questionId as string)
const answers = ref<string[]>([])
const choosedAnswerIndex = ref<number | null>()
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

  choosedAnswerIndex.value = null

  router.push(newUrl)
}

const handleAnswerSelection = (index: number) => {
  choosedAnswerIndex.value = index
}

onMounted(() => {
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
        <button
          v-for="(answer, index) in answers"
          :key="index"
          @click="handleAnswerSelection(index)"
          :id="String(index)"
          :class="{
            'question__answers-button': true,
            'active-option': index === choosedAnswerIndex
          }"
        >
          {{ answer }}
        </button>
      </div>
      <button @click="handleNextPage" class="question__next">
        {{ Number(questionId) === questionsStore.questions.length ? 'Result!' : 'Next!' }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.question__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.question__title {
  font-size: 48px;
  line-height: 64px;
  text-align: center;
}

.question__answers {
  width: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.question__answers-button {
  width: 100%;
  min-height: 64px;
  background-color: transparent;
  border-radius: 30px;
  border: 4px solid #42b983;
  font-size: 24px;
  font-weight: 700;

  transition:
    500ms border-color,
    500ms background-color,
    500ms color;
}

.question__answers-button:hover,
.question__answers-button:focus,
.question__answers-button:active {
  background-color: #fff;
  border-color: #42b983;
  color: #383d3b;
}

.question__next {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 64px;
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

.question__next:hover,
.question__next:focus,
.question__next:active {
  background-color: #fff;
  border-color: #42b983;
  color: #383d3b;
}

.active-option {
  background-color: #fff;
  border-color: #42b983;
  color: #383d3b;
  scale: 1.05;
}
</style>
