<template>
  <div id="page" ref="page">
    <div class="pane"><div></div></div>
    <div class="pane"><div>2</div></div>
    <div class="pane"><div>3</div></div>
    <div class="pane"><div>4</div></div>
    <div class="pane"><div>5</div></div>
    <div class="pane"><div>Last</div></div>
    <div class="pane"><div>Looping Horizontal Scroll</div></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const page = ref<HTMLElement | null>(null)
const dummyX = ref<number | null>(null)
const initialScroll = ref(false)

const resize = () => {
  if (!page.value) return

  const w = page.value.scrollWidth - window.innerWidth + window.innerHeight
  document.body.style.height = `${w}px`

  const lastPane = page.value.getElementsByClassName('pane')[
    page.value.getElementsByClassName('pane').length - 2
  ] as HTMLElement
  dummyX.value = lastPane.getBoundingClientRect().left + window.scrollY
}

const onScroll = () => {
  if (!page.value || dummyX.value === null) return

  const y = document.body.getBoundingClientRect().top
  page.value.scrollLeft = -y

  if (!initialScroll.value) {
    initialScroll.value = true
    window.scrollTo(0, 0)
  }

  const lastPane = page.value.getElementsByClassName('pane')[
    page.value.getElementsByClassName('pane').length - 2
  ] as HTMLElement
  const lastPaneRightEdge =
    lastPane.getBoundingClientRect().right + window.scrollY - window.innerHeight

  if (window.scrollY >= lastPaneRightEdge) {
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
