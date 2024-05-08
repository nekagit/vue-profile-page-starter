<template>
  asdf
  <ABaseIntroSection :content="'Home | Services'" />
  asdf
</template>

<script setup lang="ts">
import ABaseIntroSection from '@/components/atoms/sections/ABaseIntroSection.vue'

const weAreSection = {
  title: 'We are awesome TEAM',
  content: [
    'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '
  ],
  button: 'Info'
}
</script>

<style scoped></style>
