<template>
    <div class="game-item" :style="{ 'background-color': item.color.first }">
        <custom-icon-component :icon="item.icon" :title="item.title"></custom-icon-component>
    </div>
</template>
<script setup lang="ts">import type { GameItemModel } from '@/shared/models/game-items.model';
import { computed } from 'vue-demi';
import CustomIconComponent from '../ui/custom-icon.component.vue';

defineProps<{
    item: GameItemModel;
  }>();
  
  const theme = {
  color: 'red'
}
</script>
  
<style scoped>
    .game-item{
        width: 7em;
        height: 7em;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>