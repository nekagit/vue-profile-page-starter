<template>
  <div id="gallery-view">
    <div class="wrap">
      <ul class="tabs group">
        <li v-for="(title, index) in filteredSliderTitles" :key="index">
          <a
            :class="{ active: activeTab === title.toLowerCase() }"
            :href="'#/' + title.toLowerCase()"
            @click.prevent="changeTab(title)"
          >
            {{ title }}
          </a>
        </li>
      </ul>

      <div id="terms">
        <div v-for="(title) in filteredSliderTitles" :key="title">
          <template v-if="activeTab === title.toLowerCase()">
            <ABaseGallery :images="getImageGallery(title)" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, onMounted } from 'vue'
import ABaseGallery from '@/components/atoms/cards/ABaseGallery.vue'
import ImageHelper from '@/services/ImageHelper'

const props = defineProps(['sliderTitles'])

const activeTab = ref('')

const filteredSliderTitles = computed(() => {
  return props.sliderTitles.filter((title: string) => title !== 'FilteredTitle')
})

const getImageGallery = (title: string) => {
  const galleryKey = `${title.toLowerCase()}Gallery` as keyof typeof ImageHelper
  return ImageHelper()[galleryKey] || [] // Return an empty array if galleryKey doesn't exist
}

const changeTab = (title: string) => {
  activeTab.value = title.toLowerCase()
}

onMounted(() => {
  if (filteredSliderTitles.value.length > 0) {
    activeTab.value = filteredSliderTitles.value[0].toLowerCase()
  }
})
</script>
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
}

#terms > div[style*="display: block"] {
  display: block;
}
</style>
