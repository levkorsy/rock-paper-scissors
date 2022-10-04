<template>
  <div
    class="game-item"
    :style="{ borderColor: `var(${item.color.first})` }"
    @click="emit('select-item', item)"
  >
    <custom-icon-component
      :icon="item.icon"
      :title="item.title"
    ></custom-icon-component>
  </div>
</template>
<script setup lang="ts">
import type { GameItemModel } from "@/shared/models/game-items.model";
import CustomIconComponent from "../ui/custom-icon.component.vue";

defineProps<{
  item: GameItemModel;
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

.game-item:hover {
  cursor: pointer;
  opacity: 1;
  transform: scale(1.1);
}

/*    // TODO add gradient to the border*/
</style>
