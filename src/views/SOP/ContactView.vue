<script setup lang="ts">
import FirmDetails from '@/components/atoms/cards/ABaseAnimationCard.vue';
import ABaseFooterSection from '@/components/atoms/sections/ABaseFooterSection.vue';
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
</script>

<template>
    <div class="max-w-[100%]">
      <ContactCard />
      <FirmDetails title="'Firm'" :content="'SOP Rotterdam Foundation, Poseidonstraat 7, 3054 PZ Rotterdam,  8563.68.842,  66038138,  RABO Bank NL97 RABO,  0310 6518 67,  +31 6 41173071,  info@soprotterdam.com'" />
      <ABaseHorizontalSection :content="'SOP | Contact'" />
      <ABaseFooterSection />
    </div>

</template>
