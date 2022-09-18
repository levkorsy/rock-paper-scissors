<template>
    <div class="game-items">
        <div class="game-items__first">
            <div>1</div>
            <div>2</div>
        </div>
        <div class="game-items__second">
            <div>3</div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
  
<style>
    .game-items{
        display: flex;
        flex-direction: column;
    }

    .game-items__first{
        display: flex;
        justify-content: space-between;
    }

    .game-items__first{
        display: flex;
        justify-content: center;
    }
</style>