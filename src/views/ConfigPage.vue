<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { AmountType, DifficultyType, QuestionsType } from '@/types'

const amount = Object.entries(AmountType)
const difficulty = Object.entries(DifficultyType)
const questions = Object.entries(QuestionsType)
</script>

<template>
  <section class="config">
    <div class="config__wrapper">
      <h1 class="config__title">Customise your quiz:</h1>
      <form class="config__form form">
        <div class="form__level">
          <h2 class="form__title">Choose difficulty:</h2>
          <div class="form__buttons">
            <button v-for="option in difficulty" :key="option[0]" class="form__button">
              {{ option[0] }}
            </button>
          </div>
        </div>
        <div class="form__questions">
          <h2 class="form__title">Choose question's type:</h2>
          <div class="form__buttons">
            <button v-for="option in questions" :key="option[0]" class="form__button">
              {{ option[0] }}
            </button>
          </div>
        </div>
        <div class="form__amount">
          <h2 class="form__title">Choose amount of questions:</h2>
          <div class="form__buttons">
            <button
              v-for="option in amount"
              :key="option[0]"
              class="form__button form__rounded-button"
            >
              {{ option[1] }}
            </button>
          </div>
        </div>
        <div class="form__buttons">
          <RouterLink to="/" type="submit" class="form__button">Generate!</RouterLink>
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

.form__button:hover,
.form__button:focus,
.form__button:active {
  background-color: #fff;
  border-color: #42b983;
  color: #383d3b;
}
</style>
