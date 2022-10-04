<template>
  <div class="game-items">
    <div class="game-items__first">
      <div>
        <game-item-component :item="gameItems[0]" @select-item="selectItem"/>
      </div>
      <div>
        <game-item-component :item="gameItems[1]" @select-item="selectItem"/>
      </div>
    </div>
    <div class="game-items__second">
      <div>
        <game-item-component :item="gameItems[2]" @select-item="selectItem"/>
        <!-- TODO refactor it for bonus -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import GameItemComponent from "@/components/business/game-item.component.vue";
import { getGameItems } from "@/shared/game-items/game-items.helper";
import type {GameItemModel} from '@/shared/models/game-items.model'
import {useGameStore} from '@/store/GameStore'

const gameItems = getGameItems();
const gameStore = useGameStore();


const selectItem = (gameItem: GameItemModel):void => {
  gameStore.userSelectGameItem(gameItem)
}
</script>

<style>
.game-items {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.game-items__first {
  display: flex;
  justify-content: space-between;
}

.game-items__second {
  display: flex;
  justify-content: center;
}
</style>
