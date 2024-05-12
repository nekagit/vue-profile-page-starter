<template>
  <ScrollFullPageSideIndex
    :side-list="sideList"
    :section-contents="sideList"
    :section-Subtitle="sectionSubtitle"
    :section-titles="sectionTitles"
  />
  <ABaseHorizontalSection :content="'Home | Sport'" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue'
import ScrollFullPageSideIndex from '@/components/ScrollFullPageSideIndex.vue'
const sideList = ['SOP Sport', 'Kros', 'Fudbal', 'Boks', 'Atletika', 'Plivanje']
const sectionSubtitle = ref([
  'We provide different occasions to participate in different sports',
  'Kros is a run we organized many years until 2022 here in Rotterdam',
  'This activity takes part 1 time a year',
  'This activity takes part 1 time a year',
  'This activity takes part 1 time a year',
  'This activity takes part 1 time a year'
])
const sectionTitles = ref(['SOP Sport', 'Kros trcanje', 'Fudbal', 'Boks', 'Atletika', 'Plivanje'])
const sectionContent = ref([])
</script>
