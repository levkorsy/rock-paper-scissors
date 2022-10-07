<template>
  <div
    v-if="item"
    class="game-item winner"
    :class="{ 'game-item__disabled': disabled }"
    :style="{ borderColor: `var(${item.color.first})` }"
    @click="emit('select-item', item)"
  >
    <custom-icon-component
      :icon="item.icon"
      :title="item.title"
    ></custom-icon-component>
  </div>

  <div v-else class="game-item game-item__empty"></div>
</template>
<script setup lang="ts">
import type { GameItemModel } from "@/shared/models/game-items.model";
import CustomIconComponent from "../ui/custom-icon.component.vue";

defineProps<{
  item: GameItemModel;
  disabled: boolean;
}>();

const emit = defineEmits(["select-item"]);
</script>

<style scoped>
.game-item {
  width: 13em;
  height: 13em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-bg-color);
  border: 1em solid;
  opacity: 0.9;
  transition: all 0.1s ease-in-out;
}

.game-item__empty{
  background-color: #16213d;
  opacity: 1;
  border: none;
  pointer-events: none;
}

.game-item__disabled{
  pointer-events: none;
}

.game-item:hover {
  cursor: pointer;
  opacity: 1;
  transform: scale(1.1);
}

.game-item.winner{
  position: relative;
  --col1: #2b3858;
  --col2: #263554;
  --col3: #223351;
}

.game-item.winner::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: radial-gradient(var(--col1) 13em 16em, var(--col2) 16em 19em, var(--col3) 19em 21em);
  animation: ripple 4s linear 1;
  animation-fill-mode: forwards;
  border-radius: 50%;
  z-index: -2 ;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 13em;
    height: 13em;
  }
}

.game-item.winner::before {
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  /*background-color: #303030;*/
  z-index: -2;
}
</style>
