<template>
  <img class="icon" :src="iconSrc" :alt="props.title" />
</template>

<script setup lang="ts">
import { computed } from "vue-demi";

const props = defineProps<{
  icon: string;
  title: string;
}>();

const iconSrc = computed((): string => {
  return new URL(`../../../src/assets/img/icons/${props.icon}`, import.meta.url)
    .href;
});
</script>

<style scoped>
.icon {
  width: 6em;
  height: 6em;
}
</style>
