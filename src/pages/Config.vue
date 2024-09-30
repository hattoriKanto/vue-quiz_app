<script setup lang="ts">
import ConfigForm from '@/modules/ConfigForm/ConfigForm.vue'
</script>

<template>
  <section class="config">
    <div class="config__wrapper">
      <h1 class="config__title">Customise your quiz:</h1>
      <ConfigForm />
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

.form__back {
  background-color: #e63462;
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
