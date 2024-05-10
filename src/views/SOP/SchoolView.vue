<script setup lang="ts">
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';

const weAreSection = {
  title: 'We are awesome TEAM',
  content: [
    'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas',
    'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'
  ],
  button: 'Info'
}
const chooseSection = {
  title: 'Why Choose Us?',
  content: [
    'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur. ',
    'Sed ut perspiciaatis iste natus error sit voluptatem probably havent heard of them accusamus.'
  ],
  button: ''
}
</script>

<template>
  <ABaseHorizontalSection :content="'SOP | School'" />
</template>

<style scoped></style>
