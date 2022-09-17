<script setup lang="ts">
import HeaderComponent from "@/components/business/header/header.component.vue";
</script>

<template>
  <main class="main-container">
    <header-component/>
    <div>dice</div>
    <div>rules</div>
    <div>rules popup</div>
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