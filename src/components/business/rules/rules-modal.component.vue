<template>
  <div class="rules-modal">
    <img class="rules-modal__image" :src="rulesImgSrc" alt="rules-image">
    <custom-btn-component
        class="rules-modal__close-btn"
        @btn-click="emit('close-modal')"
    >
      x
    </custom-btn-component>
  </div>

</template>

<script setup lang="ts">
import CustomBtnComponent from "@/components/ui/custom-btn.component.vue";
import {computed} from 'vue-demi'
import {useGameStore} from '@/store/GameStore'

const emit = defineEmits(["close-modal"]);

const gameStore = useGameStore();

const rulesImgSrc = computed((): string => {
  return new URL(`../../../assets/img/image-rules${gameStore.bonus ? '-bonus' : ''}.svg`, import.meta.url)
      .href;
});
</script>

<style>
.rules-modal {
  background-color: #fff;
  height: 30rem;
  width: 25rem;
  border-radius: var(--global-border-radius);
  box-shadow: var(--rules-btn-color) 0 1px 3px 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 2rem;
  display: flex;
}

.rules-modal__close-btn{
  position: absolute;
  right: 2%;
  top: 2%;
}

.rules-modal .rules-modal__close-btn button.custom-btn {
  width: 40px !important;
}

.rules-modal__image{
  object-fit: contain;
width: 100%;
  /*min-width: 100%;*/
}
</style>
