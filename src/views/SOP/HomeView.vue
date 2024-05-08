<script setup lang="ts">
import HomeIntroComponent from '@/components/home/HomeIntroComponent.vue'
import ABaseIntroSection from '@/components/atoms/sections/ABaseIntroSection.vue'
</script>

<template>
  <div id="home-view">
    <HomeIntroComponent></HomeIntroComponent>
    <ABaseIntroSection :content="'SOP | Contact'" />
  </div>
</template>
