<template>
  <div class="header-container">
    <div class="header-container__title">
      <p>Rock</p>
      <p>Paper</p>
      <p>Scissors</p>
    </div>
    <div class="header-container__score">
      <score-component />
    </div>
  </div>
</template>

<script setup>
import ScoreComponent from "./score.component.vue";
</script>

<style scoped>
.header-container{
  border: 2px white solid;
  display: flex;
  padding: 1rem;
  border-radius: 10px;
  width: 50%;
  justify-content: space-between;
}
</style>
