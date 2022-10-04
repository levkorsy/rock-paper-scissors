<template>
  <main class="main-container">
    <header-component />
    <steps-view class="steps-container" />
    <custom-btn-component
      class="rules-container"
      secondary
      @btn-click="showRules"
    >
      Rules
    </custom-btn-component>
    <rules-modal-component v-if="isShowRules" />
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CustomBtnComponent from "@/components/ui/custom-btn.component.vue";
import RulesModalComponent from "@/components/business/rules/rules-modal.component.vue";
import HeaderComponent from "@/components/business/header/header.component.vue";
import StepsView from "@/views/StepsView.vue";

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
  align-self: flex-end;
}
</style>
