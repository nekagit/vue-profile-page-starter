<template>
  asdf
  <ABaseIntroSection :content="'Home | Services'" />
  asdf
</template>

<script setup lang="ts">
import ABaseImageSection from "@/components/molekules/MBaseImageSection.vue";
import ABaseIntroSection from "@/components/atoms/sections/ABaseIntroSection.vue";
import ABaseIconSection from "@/components/atoms/sections/ABaseIconSection.vue";

const weAreSection = {
  title: 'We are awesome TEAM',
  content: [
    'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ',
  ],
  button: 'Info'
};
</script>

<style scoped>
</style>
