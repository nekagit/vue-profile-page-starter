<template>
  <div id="page" ref="page">
    <div class="pane"></div>
    <div class="pane"></div>
    <div class="pane"></div>
    <div class="pane"></div>
    <div class="pane"></div>
    <div class="pane"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ABaseCardAnBorder from '@/components/atoms/cards/cards/ABaseCardAnBorder.vue'
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
