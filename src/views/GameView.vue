<script setup lang="ts">
import HeaderComponent from "@/components/business/header/header.component.vue";
import RulesComponent from "@/components/business/rules/rules.component.vue";
</script>

<template>
  <main class="main-container">
    <header-component/>
    <div style="flex: 2">dice</div>
    <rules-component/>
  </main>
</template>

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
</style>