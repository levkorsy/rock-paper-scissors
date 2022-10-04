<template>
  <div>
    <button
      class="custom-btn"
      :class="{ secondary: props.secondary }"
      role="button"
      @click="emit('btn-click')"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  secondary: boolean;
}>();
const emit = defineEmits(["btn-click"]);
</script>

<style scoped>
.custom-btn {
  color: var(--rules-btn-color);
  border: 1px solid var(--rules-btn-color);
  border-radius: var(--global-border-radius);
  width: 8rem;
  height: 2.5rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: var(--font-weight-bold);
  box-shadow: var(--rules-btn-color) 0 1px 3px 0;
  box-sizing: border-box;
  transition: all 250ms;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  position: relative;
}

.custom-btn:hover {
  transform: translateY(-2px);
}

.custom-btn.secondary {
  color: var(--rules-btn-color);
  background: inherit;
  border: 1px solid var(--rules-btn-color);
}

.custom-btn.secondary:hover,
.custom-btn.secondary:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: var(--main-bg-gradient-1) 0 4px 12px;
  background-color: var(--rules-btn-color);
  color: var(--main-bg-gradient-1);
}

.custom-btn.secondary:active {
  transform: translateY(0);
}
</style>
