<script setup lang="ts">
import ContainerComponent from '../ContainerComponent/ContainerComponent.vue'
</script>

<template>
  <header class="header">
    <ContainerComponent>
      <div class="header__wrapper">
        <a class="header__logo" href="">V-Quiz App</a>
      </div>
    </ContainerComponent>
  </header>
</template>

<style scoped>
.header {
  background-color: #42b983;
}

.header__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__logo {
  display: flex;
  align-items: center;
  height: 64px;
  padding-inline: 10px;

  font-size: 36px;
  line-height: 36px;
  font-weight: 700;

  scale: 1;
  transition: 500ms scale;
}

.header__logo:hover,
.header__logo:focus,
.header__logo:active {
  scale: 1.1;
}
</style>
