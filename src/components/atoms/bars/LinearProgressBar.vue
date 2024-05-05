<template>
  <div class="container">
    <div class="progress" :style="{ width: progressBarWidth }"></div>
  </div>
  <div class="text">
    <p>{{ progressPercentage }}%</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let progressBarWidth = ref('0%');
let progressPercentage = ref(0);

const interval = setInterval(() => {
  progressPercentage.value += 10;
  progressBarWidth.value = `${progressPercentage.value}%`;

  if (progressPercentage.value >= 100) {
    clearInterval(interval);
  }
}, 1000);
</script>

<style scoped>
.container {
    min-width:200px;
    max-width:300px;
  background-color: rgb(214, 207, 207);
  height: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 2px;
  margin:auto;
}
.text {
  color: rgb(0, 0, 0);
}
.progress {
  height: 100%;
  background-color: rgb(255, 30, 30);
  border-radius: 10px;
  transition: width 1s;
}
</style>
