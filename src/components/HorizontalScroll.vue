<template>
  <div id="page" ref="page">
    <div class="pane">
      <div class="flex flex-col p-12">
        <h1 class="text-center">SOP Rotterdam School</h1>
        <OInternetAnimationCard
          title="Intro"
          subtitle="Overview"
          subtitleColor="black"
          overlayBackgroundColor="#186218"
          :mainImageUrl="SchoolHeader"
          :insetImageUrl="SchoolLogo"
          :textContent="[
            'ДОЂИТЕ ДА СЕ ДРУЖИМО И КРОЗ ИГРУ УЧИМО',
            'Српски језик , културу и историју за ученике основних школа. Под покровитељством Министарства просвете, науке и технолошког развоја Републике Србије. Часови су бесплатни.'
          ]"
          borderGradient="linear-gradient(-50deg, green, #00b300, forestgreen, green, lightgreen, #00e600, green) 1"
          dotColor="yellow"
          dotBorderColor="indigo"
          :dots="3"
        />
      </div>
    </div>
    <div class="pane">
      <div class="flex flex-col p-12 gap-16">
        <AInternetUpFlipCard />
        <AInternetUpFlipCard />
        <AInternetUpFlipCard />
      </div>
    </div>
    <div class="pane">
      <div class="flex flex-col p-12 gap-16">
        <ABaseContactCard :full-name="'Biljana Krum'" :title="'Teacher'" :img-src="Rihana" />

        <ABaseAnimationCard
          title="'School'"
          :content="'Удружење Српско Омладинско Пријатељство Ротердам admin@stichtingsoprotterdam.nl Амбасада Републике Србије у Краљевини Холандији konzularno.hag@mfa.rs Биљана Крчум krcumb@gmail.com'"
        />
      </div>
    </div>
    <div class="pane">
      <AInternetContactCard />
    </div>
    <!-- <div class="pane"></div>
    <div class="pane"></div> -->
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import OInternetAnimationCard from '@/components/organisms/OInternetAnimationCard.vue'
import AInternetUpFlipCard from '@/components/atoms/cards/internet/AInternetUpFlipCard.vue'
import SchoolHeader from '@/assets/SOP/schoolPage/schoolHeader.jpg'
import SchoolLogo from '@/assets/SOP/schoolPage/schoolLogo.jpg'
import Rihana from '@/assets/SOP/schoolPage/rihana.jpg'
import ABaseContactCard from '@/components/atoms/cards/ABaseContactCard.vue'
import ABaseAnimationCard from '@/components/atoms/cards/ABaseAnimationCard.vue'
import AInternetContactCard from '@/components/atoms/cards/AInternetContactCard.vue'
const page = ref<HTMLElement | null>(null)
const initialScroll = ref(false)

const resize = () => {
  if (!page.value) return

  const w = page.value.scrollWidth - window.innerWidth + window.innerHeight
  document.body.style.height = `${w}px`
}

const onScroll = () => {
  if (!page.value) return

  const y = document.body.getBoundingClientRect().top
  page.value.scrollLeft = -y

  if (!initialScroll.value) {
    initialScroll.value = true
    window.scrollTo(0, 0)
  }
}

onMounted(() => {
  page.value = document.getElementById('page') as HTMLElement

  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', resize)

  resize()

  // Start at the first pane
  if (page.value) {
    window.scrollTo(0, 0)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
#page {
  overflow: hidden;
  white-space: nowrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  display: flex;
  flex-wrap: nowrap;
}
.pane {
  flex: 0 0 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #005575;
}
.pane:nth-child(4n + 2) {
  background-color: #0a9000;
}
.pane:nth-child(4n + 3) {
  background-color: #edde05;
}
.pane:nth-child(4n + 4) {
  background-color: #ffffff;
}
.pane:last-child {
  background-color: #7b1200;
}
</style>
