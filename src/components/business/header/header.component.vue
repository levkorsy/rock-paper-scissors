<template>
  <div class="header-container">
    <div class="header-container__title">
      <div v-for="(item, index) in displayItem" :key="index" class="header-container__title-item">
        {{ item.title }}
      </div>
    </div>
    <div class="header-container__score">
      <score-component />
    </div>
  </div>
</template>

<script setup lang="ts">
import ScoreComponent from "@/components/business/header/score.component.vue";
import { getGameItems } from "@/shared/game-items/game-items.helper"
import type { GameItemModel } from "@/shared/models/game-items.model";

const displayItem: Array<GameItemModel> = getGameItems(false)
// TODO add flag from store
</script>
<style scoped>
.header-container{
  border: 2px #5f6f89 solid;
  display: flex;
  padding: 1rem;
  border-radius: 10px;
  width: 50%;
  justify-content: space-between;
}

.header-container__title-item{
  text-transform: uppercase;
  color: white;
  font-size: 2em;
  font-weight: var(--font-weight-bolder);
}

</style>
