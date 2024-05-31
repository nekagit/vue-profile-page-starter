<template>
  <ul class="p-0 m-auto block w-full max-w-[80vw] overflow-y-hidden overflow-x-auto whitespace-nowrap text-center scroll-smooth">
    <li
      v-for="img in images"
      :key="img"
      class="sticky left-0 w-[min(50vw,350px)] inline-block text-center bg-[#16171f] text-[#9b9dad] pb-6 shadow-[0_-10px_30px_0_rgba(0,0,0,0.25)] ml-[-4px]"
    >
      <!-- <img :src="img" alt="Image"> -->
      <MBaseImgModal :img-src="img" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import MBaseImgModal from '@/components/molekules/modals/MBaseImgModal.vue';

defineProps(['images'])
</script>
