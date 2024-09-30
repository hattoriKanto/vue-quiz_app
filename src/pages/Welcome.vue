<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { descriptionText, titleText } from '@/texts'
import Text from '@/modules/Text/Text.vue'
</script>

<template>
  <section class="welcome">
    <div class="welcome__wrapper">
      <Text :title="titleText.welcome" :description="descriptionText.welcome" />
      <RouterLink to="/category" class="welcome__button">Let's start!</RouterLink>
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

.welcome__button:hover,
.welcome__button:focus,
.welcome__button:active {
  background-color: #fff;
  border-color: #42b983;
  color: #383d3b;
}
</style>
