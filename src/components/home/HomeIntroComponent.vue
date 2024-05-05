<script setup lang="ts">
import { ref } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// Import the images statically
import intro01 from '@/assets/intro/intro01.jpg'
import intro02 from '@/assets/intro/intro02.jpg'
import intro03 from '@/assets/intro/intro03.jpg'
import intro04 from '@/assets/intro/intro04.jpg'

import Intro01Component from './intro/Intro01Component.vue'
import Intro02Component from './intro/Intro02Component.vue'
import Intro03Component from './intro/Intro03Component.vue'
import Intro04Component from './intro/Intro04Component.vue'

const pauseOnHover = ref(false)
const isMobile = ref(false)

const slides = [
  {
    title: 'Spotlees aus Dortmund',
    image: intro01,
    component: Intro01Component
  },
  {
    title: 'Schadenfeststellung vom KFZ-Gutachter',
    image: intro02,
    component: Intro02Component
  },
  {
    title: 'Spotlees aus Dortmund',
    image: intro03,
    component: Intro03Component
  },
  {
    title: 'Spotlees aus Dortmund',
    image: intro04,
    component: Intro04Component
  }
]
</script>

<template>
  <div id="home-intro-component" class="shadow-xl mx-11">
    <vueper-slides
      fixed-height="70vh"
      autoplay
      :pause-on-hover="pauseOnHover"
      :arrows="!isMobile"
      lazy-load-on-drag
      :dragging-distance="70"
      :pause-on-touch="false"
      :duration="10000"
      fade
      class="shadow-xl"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" class="shadow-xl">
        <template v-slot:content>
          <component class="shadow-xl" :is="slide.component"></component>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>