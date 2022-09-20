<template>
    <div class="game-items">
        <div class="game-items__first">
            <div>
                <game-item-component :item="gameItems[0]"/>
            </div>
            <div>
                <game-item-component :item="gameItems[1]"/>
            </div>
        </div>
        <div class="game-items__second">
            <div>
                <game-item-component :item="gameItems[2]"/>
                <!-- TODO refactor it for bonus -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import GameItemComponent from "@/components/business/game-item.component.vue";
import { getGameItems } from "@/shared/game-items/game-items.helper";

const gameItems = getGameItems()
</script>
  
<style>
    .game-items{
        display: flex;
        flex-direction: column;
    }

    .game-items__first{
        display: flex;
        justify-content: space-between;
    }

    .game-items__second{
        display: flex;
        justify-content: center;
    }
</style>