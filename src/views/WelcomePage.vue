<script setup lang="ts"></script>

<template>
  <section class="welcome">
    <div class="welcome__wrapper">
      <h1 class="welcome__title">Here we go!</h1>
      <p class="welcome__descrption">
        Welcome to the V-Quiz App! Test your knowledge with challenging quizzes on various topics.
        Play and learn!
      </p>
      <button class="welcome__button">Let's start!</button>
    </div>
  </section>
</template>

<style scoped>
.welcome__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.welcome__descrption {
  text-align: center;
  font-size: 36px;
  line-height: 48px;
}

.welcome__button {
  margin-top: 64px;
  width: 256px;
  height: 64px;
  border-radius: 30px;

  font-size: 24px;
  font-weight: 700;

  border: 4px solid transparent;
  transition:
    500ms border-color,
    500ms background-color,
    500ms color;
}

.welcome__button:hover,
.welcome__button:focus,
.welcome__button:active {
  background-color: #fff;
  border-color: #42b983;
  color: #383d3b;
}
</style>
