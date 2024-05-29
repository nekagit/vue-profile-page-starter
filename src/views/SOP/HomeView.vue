<script setup lang="ts">
import ABaseFooterSection from '@/components/atoms/sections/ABaseFooterSection.vue';
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import HomeIntroComponent from '@/components/home/HomeIntroComponent.vue';
</script>

<template>
    <HomeIntroComponent />
    <ABaseHorizontalSection :content="'SOP | Home'" />
  <ABaseFooterSection />

</template>
