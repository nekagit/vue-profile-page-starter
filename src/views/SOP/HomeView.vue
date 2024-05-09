<script setup lang="ts">
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import HomeIntroComponent from '@/components/home/HomeIntroComponent.vue';
</script>

<template>
  <div id="home-view">
    <HomeIntroComponent></HomeIntroComponent>
    <ABaseHorizontalSection :content="'SOP | Contact'" />
  </div>
</template>
