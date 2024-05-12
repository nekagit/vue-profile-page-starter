<template>
<ScrollFullPageSideIndex :side-list="sideList" :section-contents="sideList" />
  <ABaseHorizontalSection :content="'Home | Sport'" />
</template>

<script setup lang="ts">
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import ScrollFullPageSideIndex from '@/components/ScrollFullPageSideIndex.vue';
const sideList = ["SOP Sport", "Kros", "Fudbal", "Boks", "Atletika", "Plivanje"]

</script>

<style scoped></style>
