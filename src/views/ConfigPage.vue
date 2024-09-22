<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import useQuizConfigStore from '@/stores/quizConfig'
import { Amount, Difficulty, Questions } from '@/utils'

const amountArray = Object.entries(Amount)
const difficultyArray = Object.entries(Difficulty)
const questionsArray = Object.entries(Questions)

const quizConfigStore = useQuizConfigStore()
const router = useRouter()

const handleSubmit = (event: Event) => {
  event.preventDefault()
  console.table(quizConfigStore)
  router.push('/')
  quizConfigStore.$reset()
}
</script>

<template>
  <section class="config">
    <div class="config__wrapper">
      <h1 class="config__title">Customise your quiz:</h1>
      <form @submit="handleSubmit" class="config__form form">
        <div class="form__level">
          <h2 class="form__title">Choose difficulty:</h2>
          <div class="form__buttons">
            <button
              v-for="option in difficultyArray"
              @click.prevent="quizConfigStore.setOptionValue('difficulty', option[0])"
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
              @click.prevent="quizConfigStore.setOptionValue('type', option[0])"
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
              @click.prevent="quizConfigStore.setOptionValue('amount', option[0])"
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
          <RouterLink to="/category" class="form__button form__back">Back</RouterLink>
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
