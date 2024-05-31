<template>
  <ul>
    <li v-for="img in images" :key="img">
      <img :src="img" alt="asdf">
      <!-- <MBaseImgModal :img-src="img" /> -->
    </li>
  </ul>
</template>

<script setup lang="ts">
import MBaseImgModal from '@/components/molekules/modals/MBaseImgModal.vue';

defineProps(['images'])
</script>

<style lang="scss" scoped>

ul {
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  text-align: center;
  scroll-behavior: smooth;
}

li {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  width: min(50vw, 350px);
  display: inline-block;
  text-align: center;
  background-color: #16171f;
  color: #9b9dad;
  padding-bottom: 1.5rem;
  font-size: clamp(18px, 2.5vw, 22px);
  box-shadow: -10px 0 30px 0 rgba(#000, 0.25);
  margin-left: -4px;
}

</style>
