<script setup lang="ts">
import MainCard from "@/components/MainCard.vue"
import { RouterView } from 'vue-router'
import TopnavComponent from './components/atoms/nav/TopnavComponent.vue'
import MenuButton from './components/atoms/nav/AMenuButton.vue'
import ABaseFooterSection from './components/atoms/sections/ABaseFooterSection.vue'
import NavBar3D from "./components/NavBar3D.vue"
</script>

<template>
 <RouterView class="font-libre h-screen" /> -->
 <!--  <div class="lg:hidden font-libre">
    <MenuButton />
  </div>-->
  <NavBar3D />
  <ABaseFooterSection class="font-libre"  /> 
</template>

<style scoped></style>
