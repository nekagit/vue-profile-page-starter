<script setup lang="ts">
import ABaseIntroSection from '@/components/atoms/sections/ABaseIntroSection.vue'
import ABaseCardAnBorder from '@/components/atoms/cards/cards/ABaseCardAnBorder.vue';
import ABaseContactCard from '@/components/atoms/cards/ABaseContactCard.vue'
import MilanVukas from "@/assets/SOP/milan_web.jpg"
import AleksandarVasic from "@/assets/SOP/alex_raw.jpg"
import Guest from "@/assets/SOP/guest.jpg"
</script>

<template>
    <div class="flex flex-col lg:flex-row ">

        <ABaseContactCard :full-name="'Aleksandar Vasic'" :title="'General board member'" :img-src="AleksandarVasic" />
        <ABaseContactCard :full-name="'Milan Vukas'" :title="'Chairman/Treasurer'" :img-src="MilanVukas" />
        <ABaseContactCard :full-name="'Sasa Peric'" :title="''" :img-src="Guest" />
    </div>
  <ABaseContactCard :full-name="'Predrag Joldic'" :title="''" :img-src="Guest" />

<ABaseCardAnBorder :content="'asdf'" :title="'Контакт Удружење Српско Омладинско Пријатељство Ротердам admin@stichtingsoprotterdam.nl'" :variant="3"/>
<ABaseIntroSection :content="'SOP | Contact'" />
</template>

<style scoped>

</style>