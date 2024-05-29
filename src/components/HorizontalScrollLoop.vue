<template>
  <div id="page">
    <div class="pane"><div>Looping Horizontal Scroll</div></div>
    <div class="pane"><div>2</div></div>
    <div class="pane"><div>3</div></div>
    <div class="pane"><div>4</div></div>
    <div class="pane"><div>5</div></div>
    <div class="pane"><div>Last</div></div>
    <div class="pane"><div>Looping Horizontal Scroll</div></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const page = ref<HTMLElement | null>(null);
const dummyX = ref<number | null>(null);

const resize = () => {
  if (!page.value) return;
  
  const w = page.value.scrollWidth - window.innerWidth + window.innerHeight;
  document.body.style.height = `${w}px`;
  
  const lastPane = page.value.getElementsByClassName('pane')[page.value.getElementsByClassName('pane').length - 1] as HTMLElement;
  dummyX.value = lastPane.getBoundingClientRect().left + window.scrollY;
};

const onScroll = () => {
  if (!page.value || dummyX.value === null) return;

  const y = document.body.getBoundingClientRect().top;
  page.value.scrollLeft = -y;

  const diff = window.scrollY - dummyX.value;
  if (diff > 0) {
    window.scrollTo(0, diff);
  } else if (window.scrollY === 0) {
    window.scrollTo(0, dummyX.value);
  }
};

onMounted(() => {
  page.value = document.getElementById('page') as HTMLElement;
  
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', resize);
  
  resize();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', resize);
});
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
  color: #FFF;
  font-family: Helvetica;
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
  background-color: #CCC;
  display: flex;
  flex-wrap: no-wrap;
}
.pane {
  flex: 0 0 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #45CCFF;
}
.pane:nth-child(4n+2) {
  background-color: #49E83E;
}
.pane:nth-child(4n+3) {
  background-color: #EDDE05;
}
.pane:nth-child(4n+4) {
  background-color: #E84B30;
}
.pane:last-child {
  background-color: #45CCFF;
}
</style>
