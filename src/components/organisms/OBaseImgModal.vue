<template>
  <ABaseImageCard
    :id="'myImg' + uniqueId"
    class="max-h-[800px] myImg"
    :text="content"
    :imgSrc="imgSrc"
    @click="openModal"
  />

  <div :id="'myModal' + uniqueId" class="modal" @click="closeModal">
    <div class="modal-content-wrapper" @click.stop>
      <button class="close" @click="closeModal">&times;</button>
      <ABaseCardAnBorder
        class="modal-content"
        :content="content"
        :title="title"
        :sub-title="subTitle"
        :variant="3"
      />
      <MBaseGallerySlider :slider-titles="['']" :images="images" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ABaseCardAnBorder from '@/components/atoms/cards/ABaseCardAnBorder.vue';
import ABaseImageCard from '@/components/atoms/img/ABaseImgCard.vue';
import MBaseGallerySlider from '@/components/molekules/img/MBaseGallerySlider.vue';
import { onMounted, ref } from 'vue';

defineProps<{
  title: string
  subTitle: string
  content: string
  imgSrc: string
  images: string[]
}>()

const uniqueId = ref(Math.random().toString(36).substr(2, 9))
const modal = ref<HTMLElement | null>(null)

const openModal = () => {
  if (modal.value) {
    modal.value.style.display = 'block'
    document.body.style.overflow = 'hidden' // Disable main scrollbar
  }
}

const closeModal = () => {
  if (modal.value) {
    modal.value.style.display = 'none'
    document.body.style.overflow = 'auto' // Enable main scrollbar
  }
}

onMounted(() => {
  modal.value = document.getElementById('myModal' + uniqueId.value)
})
</script>

<style scoped>
.myImg {
  opacity: 0.5;
  cursor: pointer;
  transition: 0.3s;
  display: block;
  margin: auto;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.myImg:hover {
  opacity: 0.9;
}

.modal {
  display: none;
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content-wrapper {
  position: relative;
}

.modal-content {
  margin: auto;
  display: block;
  padding: 1rem;
  width: 75%;
  animation-name: zoom;
  animation-duration: 0.6s;
}

.modal-image {
  width: 100%;
}

@keyframes zoom {
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
}

/* Style for smaller screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
