<template>
  <div
    v-if="item"
    class="game-item"
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

/*    // TODO add gradient to the border*/
</style>
