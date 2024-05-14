<script setup lang="ts">
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import MBaseGallerySlider from "@/components/molekules/MBaseGallerySlider.vue"
</script>

<template>
 <MBaseGallerySlider :slider-titles="['SOP', 'Sport', 'School']" />
  <ABaseHorizontalSection :content="'SOP | Gallery'" />
</template>

<style scoped>
</style>
