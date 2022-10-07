<template>
  <main class="main-container">
    <header-component />

    <steps-view class="steps-container" />

    <div class="rules-container">
      <custom-btn-component
          class="reset-btn"
          @btn-click="gameStore.resetGame"
      >
        <span class="reset-btn__icon">&#x21bb;</span>
      </custom-btn-component>

      <custom-btn-component
        class="rules-container"
        secondary
        @btn-click="showRules"
      >
        Rules
      </custom-btn-component>
    </div>

    <rules-modal-component
        v-if="isShowRules"
        @close-modal="isShowRules = false"
    />
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CustomBtnComponent from "@/components/ui/custom-btn.component.vue";
import RulesModalComponent from "@/components/business/rules/rules-modal.component.vue";
import HeaderComponent from "@/components/business/header/header.component.vue";
import StepsView from "@/views/StepsView.vue";
import { useGameStore } from "@/store/GameStore";

const gameStore = useGameStore();

const isShowRules = ref<boolean>(false);

const showRules = () => {
  isShowRules.value = !isShowRules.value;
};
</script>

<style>
.main-container {
  background-image: linear-gradient(
    var(--main-bg-gradient-1),
    var(--main-bg-gradient-2)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
}

.steps-container {
  margin-top: 10%;
}

.rules-container {
  display: flex;

  align-self: flex-end;
}

.reset-btn__icon {
  font-size: 2em;
}

.rules-container .reset-btn .custom-btn {
  width: 40px;
  margin-inline-end: 1em;
}
</style>
