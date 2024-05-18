<script setup lang="ts">
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue'
import ABaseCardAnBorder from '@/components/atoms/cards/cards/ABaseCardAnBorder.vue'
</script>

<template>
  <ABaseCardAnBorder
    class="w-[400px] mx-auto"
    :content="'This page is under development'"
    :title="''"
    :sub-title="''"
    :variant="2"
  />
  <ABaseHorizontalSection :content="'SOP | School'" />
</template>

<style scoped></style>
