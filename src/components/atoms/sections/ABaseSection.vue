<template>
<div class="grid grid-cols-2  w-full md:grid-cols-1 md:w[50%] mx-auto">
  <div class="">
    <div>
      
            <h1 class="font-bold text-2xl" :class="{ 'float-end': position === 'right', 'text-center': position === 'center' }">{{ sectionItem.title }}</h1> <!-- Adjusted class binding -->
        </div>
      </div>
      <ABaseImgModal class="w-full h-fit my-auto" />
    </div>
    <div class="user-box md:w-[50%] md:mx-auto">
      <p v-for="content in sectionItem.content" class="text-slate-400" :key="content">
        {{ content }}
      </p>
    </div>
    <button v-if="button" href="#">
      {{ sectionItem.button }}
    </button>
</template>

<script setup lang="ts">
import ABaseImgModal from '../img/ABaseImgModal.vue';

interface Section {
  title: string
  content: string[]
  button: string
}
export interface BaseSection {
  button?: boolean
  position: string
  sectionItem: Section
}
defineProps<BaseSection>()
</script>

<style lang="scss" scoped>

</style>