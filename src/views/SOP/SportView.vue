<template>
  asdf
  <ABaseHorizontalSection :content="'Home | Services'" />
  asdf
</template>

<script setup lang="ts">
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';

const weAreSection = {
  title: 'We are awesome TEAM',
  content: [
    'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
  ],
  button: 'Info'
}
</script>

<style scoped></style>
