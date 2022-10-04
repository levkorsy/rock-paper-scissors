<template>
  <div class="score-container">
    <div class="score-container__title">Score</div>
    <div class="score-container__value">{{ scoreStore.score }}</div>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from "@/store/ScoreStore";

const scoreStore = useScoreStore();
</script>

<style scoped>
.score-container {
  border-radius: var(--global-border-radius);
  background-color: var(--light-bg-color);
  height: 8rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-container__title {
  text-transform: lowercase;
  color: #4053c5;
  font-size: 1.1rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.1rem;
}

.score-container__value {
  color: #59556e;
  font-weight: var(--font-weight-bolder);
  font-size: 4rem;
}
</style>
