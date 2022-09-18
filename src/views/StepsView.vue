<template>
    <!-- <component :is='currentComponent'></component> -->
<!-- TODO thick about dinamic component -->
    <div class="steps-container"> 
        <select-step-component v-if="gameStore.activeStep === GameStepsEnum.SELECT"/>
        <result-step-component v-if="gameStore.activeStep === GameStepsEnum.RESULT"/>
   </div>

</template>
<script setup lang="ts">
import SelectStepComponent from "./steps/select-step.component.vue";
import ResultStepComponent from "./steps/result-step.component.vue";
import { useGameStore } from "@/store/GameStore";
import { GameStepsEnum } from '@/shared/models/game-steps.enum'

import { computed } from "vue-demi";

const gameStore = useGameStore();

// const currentComponent = computed(():string => {
//     return `${gameStore.activeStep}-step-component`
// })
</script>
  
<style>
    .steps-container{
        flex: 2;
    }
</style>