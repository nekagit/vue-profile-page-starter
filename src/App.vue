<script setup lang="ts">
import ABaseFooterSection from './components/atoms/sections/ABaseFooterSection.vue'
import ScrollFullPageSideIndex from './components/ScrollFullPageSideIndex.vue';
const sideList = ["asdf", "asdf", "asdf", "asdf", "asdf", "asdf"]
</script>

<template>
<ScrollFullPageSideIndex :side-list="sideList" :section-contents="sideList" />
<ABaseFooterSection class="font-libre" />
</template>
