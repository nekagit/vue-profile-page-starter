<script setup lang="ts">
import ABaseGallery from '@/components/atoms/cards/ABaseGallery.vue';
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import ImageHelper from "@/services/ImageHelper"
import { onMounted, ref } from 'vue';
const activeTab = ref('one')
onMounted(() => {
  const tabs = document.querySelectorAll('.tabs li a')

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const terms = tab.hash.replace('/', '')
      tabs.forEach((t) => t.classList.remove('active'))
      tab.classList.add('active')
      activeTab.value = terms.substring(1) // Remove the '#' from the term ID
    })
  })
})
</script>

<template>
  <div id="gallery-view">
    <div class="wrap">
      <ul class="tabs group">
        <li><a :class="{ active: activeTab === 'one' }" href="#/one">SOP</a></li>
        <li><a :class="{ active: activeTab === 'two' }" href="#/two">Sport</a></li>
        <li>
          <a :class="{ active: activeTab === 'three' }" href="#/three">School</a>
        </li>
      </ul>

      <div id="terms">
        <div v-if="activeTab === 'one'"><ABaseGallery :images="ImageHelper().sopGallery" /></div>
        <div v-if="activeTab === 'two'"><ABaseGallery :images="ImageHelper().sportGallery" /></div>
        <div v-if="activeTab === 'three'"><ABaseGallery :images="ImageHelper().schoolGallery" /></div>
      </div>
    </div>
  </div>
  <ABaseHorizontalSection :content="'SOP | Gallery'" />
</template>

<style scoped>
.wrap {
  margin-top: -10px;
}

ul.tabs {
  width: 100%;
  margin: 0 auto;
  list-style: none;
  overflow: hidden;
  padding: 0;
  display: flex;
}

ul.tabs li {
  flex: 1;
}

ul.tabs li a {
  display: block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background: transparent;
  border-radius: 8px;
  transition: all 0.3s;
}

ul.tabs li a.active {
  background: transparent;
  color: #d3fef5;
}

#terms {
  width: 100%;
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 10px;
}

#terms > div {
  font-family: 'Open Sans', sans-serif;
  padding: 20px;
  color: #ffffff;
  line-height: 26px;
  font-size: 18px;
  margin: 0;
  display: none;
}

#terms > div:first-child {
  display: block;
}
</style>
