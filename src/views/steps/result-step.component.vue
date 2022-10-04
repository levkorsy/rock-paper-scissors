<template>
  <div class="result-game-items">
    <div class="result-game-item__user">
      <game-item-component :item="gameStore.selectedItems.user" />
    </div>
    <div class="result-game"></div>
    <div class="result-game-item__ai">
      <game-item-component :item="gameStore.selectedItems.ai" />
    </div>
  </div>
</template>
<script setup lang="ts">
import GameItemComponent from "@/components/business/game-item.component.vue";
import {useGameStore} from '@/store/GameStore'

const gameStore = useGameStore();
</script>


<style>
  .result-game-items{
    width: 100%;
    display: flex;
    /* flex: 1; */
    justify-content: space-around;
  }
</style>
