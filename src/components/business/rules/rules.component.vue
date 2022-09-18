<template>
  <div class="rules-container">
    <custom-btn-component 
        secondary
        @btn-click="showRules">
        Rules
    </custom-btn-component> 
  </div>
</template>

<script setup lang="ts">
import CustomBtnComponent from "@/components/ui/custom-btn.component.vue";
import { ref } from "vue";

const isShowRules = ref<boolean>(false)

const showRules = () => {
    isShowRules.value = !isShowRules.value
}

</script>

<style scoped>
.rules-container {
  align-self: flex-end;
}
</style>
