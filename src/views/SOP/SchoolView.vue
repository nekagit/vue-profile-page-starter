<script setup lang="ts">
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import ScrollFullPageSideIndex from '@/components/ScrollFullPageSideIndex.vue';
const sideList = ["asdf", "asdf", "asdf", "asdf", "asdf", "asdf"]

</script>

<template>
<ScrollFullPageSideIndex :side-list="sideList" :section-contents="sideList" />
  <ABaseHorizontalSection :content="'SOP | School'" />
</template>

<style scoped></style>
