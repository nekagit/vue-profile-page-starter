<template>
  <div id="page" ref="page">
    <div class="pane">
      <OInternetAnimationCard
        title="School"
        subtitle="Overview"
        subtitleColor="black"
        overlayBackgroundColor="white"
        mainImageUrl="https://assets.codepen.io/4787486/trees.png"
        insetImageUrl="https://assets.codepen.io/4787486/oak_1.jpg"
        :textContent="[
          'Trees are woody perennial plants that are a member of the kingdom Plantae. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.',
          'Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.',
          'When managed properly, trees are a good source of renewable energy and construction material.'
        ]"
        borderGradient="linear-gradient(-50deg, green, #00b300, forestgreen, green, lightgreen, #00e600, green) 1"
        dotColor="yellow"
        dotBorderColor="indigo"
        :dots="3"
      />
    </div>
    <div class="pane">
      <OInternetAnimationCard
        title="Trees"
        subtitle="Kingdom: Plantae"
        subtitleColor="white"
        overlayBackgroundColor="#186218"
        mainImageUrl="https://assets.codepen.io/4787486/trees.png"
        insetImageUrl="https://assets.codepen.io/4787486/oak_1.jpg"
        :textContent="[
          'Trees are woody perennial plants that are a member of the kingdom Plantae. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.',
          'Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.',
          'When managed properly, trees are a good source of renewable energy and construction material.'
        ]"
        borderGradient="linear-gradient(-50deg, green, #00b300, forestgreen, green, lightgreen, #00e600, green) 1"
        dotColor="yellow"
        dotBorderColor="indigo"
        :dots="3"
      />
    </div>
    <div class="pane">
      <OInternetAnimationCard
        title="Trees"
        subtitle="Kingdom: Plantae"
        subtitleColor="white"
        overlayBackgroundColor="#186218"
        mainImageUrl="https://assets.codepen.io/4787486/trees.png"
        insetImageUrl="https://assets.codepen.io/4787486/oak_1.jpg"
        :textContent="[
          'Trees are woody perennial plants that are a member of the kingdom Plantae. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.',
          'Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.',
          'When managed properly, trees are a good source of renewable energy and construction material.'
        ]"
        borderGradient="linear-gradient(-50deg, green, #00b300, forestgreen, green, lightgreen, #00e600, green) 1"
        dotColor="yellow"
        dotBorderColor="indigo"
        :dots="3"
      />
    </div>
    <div class="pane">
      <OInternetAnimationCard
        title="Trees"
        subtitle="Kingdom: Plantae"
        subtitleColor="white"
        overlayBackgroundColor="#186218"
        mainImageUrl="https://assets.codepen.io/4787486/trees.png"
        insetImageUrl="https://assets.codepen.io/4787486/oak_1.jpg"
        :textContent="[
          'Trees are woody perennial plants that are a member of the kingdom Plantae. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.',
          'Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.',
          'When managed properly, trees are a good source of renewable energy and construction material.'
        ]"
        borderGradient="linear-gradient(-50deg, green, #00b300, forestgreen, green, lightgreen, #00e600, green) 1"
        dotColor="yellow"
        dotBorderColor="indigo"
        :dots="3"
      />
    </div>
    <div class="pane">
      <OInternetAnimationCard
        title="Trees"
        subtitle="Kingdom: Plantae"
        subtitleColor="white"
        overlayBackgroundColor="#186216"
        mainImageUrl="https://assets.codepen.io/4787486/trees.png"
        insetImageUrl="https://assets.codepen.io/4787486/oak_1.jpg"
        :textContent="[
          'Trees are woody perennial plants that are a member of the kingdom Plantae. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.',
          'Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.',
          'When managed properly, trees are a good source of renewable energy and construction material.'
        ]"
        borderGradient="linear-gradient(-50deg, green, #00b300, forestgreen, green, lightgreen, #00e600, green) 1"
        dotColor="yellow"
        dotBorderColor="indigo"
        :dots="3"
      />
    </div>
    <div class="pane">
      <OInternetAnimationCard
        title="Trees"
        subtitle="Kingdom: Plantae"
        subtitleColor="white"
        overlayBackgroundColor="#186218"
        mainImageUrl="https://assets.codepen.io/4787486/trees.png"
        insetImageUrl="https://assets.codepen.io/4787486/oak_1.jpg"
        :textContent="[
          'Trees are woody perennial plants that are a member of the kingdom Plantae. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.',
          'Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.',
          'When managed properly, trees are a good source of renewable energy and construction material.'
        ]"
        borderGradient="linear-gradient(-50deg, green, #00b300, forestgreen, green, lightgreen, #00e600, green) 1"
        dotColor="yellow"
        dotBorderColor="indigo"
        :dots="3"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import OInternetAnimationCard from '@/components/organisms/OInternetAnimationCard.vue'
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
body {
  overflow-x: hidden;
  color: #fff;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 200%;
}
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
  background-color: #45ccff;
}
.pane:nth-child(4n + 2) {
  background-color: #49e83e;
}
.pane:nth-child(4n + 3) {
  background-color: #edde05;
}
.pane:nth-child(4n + 4) {
  background-color: #e84b30;
}
.pane:last-child {
  background-color: #ffffff;
}
</style>
