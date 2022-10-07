<template>
  <div v-if="gameStore.selectedItems.user && gameStore.selectedItems.ai" class="play-again-container">
    <div class="play-again__winner"> {{winnerTitle }}</div>
    <div>
      <custom-btn-component
          @btn-click="gameStore.playAgain"
      >
        Play again
      </custom-btn-component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGameStore } from "@/store/GameStore";
import CustomBtnComponent from "@/components/ui/custom-btn.component.vue";
import {computed} from 'vue-demi'

const gameStore = useGameStore();

const winnerTitle = computed((): string => { return gameStore.winner === 'user' ? "you win" : gameStore.winner === 'ai' ? 'you lose' : 'draw' })
</script>

<style>
.play-again-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.play-again__winner {
  text-transform: uppercase;
  color: white;
  font-size: 3em;
  font-weight: var(--font-weight-bolder);
}
</style>
