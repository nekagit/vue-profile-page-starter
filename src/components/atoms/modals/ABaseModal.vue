<template>
  <button class="btn-31" @click="openModal">
    <span class="text-container">
      <span class="text">Check</span>
    </span>
  </button>
  <div :id="'myModal' + uniqueId" class="modal w-full h-screen" @click="closeModal">
    <div class="modal-content-wrapper" @click.stop>
      <button class="close" @click="closeModal">&times;</button>
      <ABaseImageCard :id="'myImg'" class="myImg" :imgSrc="imgSrc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ABaseImageCard from '@/components/atoms/img/ABaseImgCard.vue'

defineProps<{
  imgSrc: string
}>()

const uniqueId = ref(Math.random().toString(36).substr(2, 9))
const modal = ref<HTMLElement | null>(null)

const openModal = () => {
  if (modal.value) {
    modal.value.style.display = 'flex'
  }
}

const closeModal = () => {
  if (modal.value) {
    modal.value.style.display = 'none'
  }
}

onMounted(() => {
  modal.value = document.getElementById('myModal' + uniqueId.value)
})
</script>

<style scoped>
.myImg {
  cursor: pointer;
  transition: 0.3s;
  margin: auto;
  border-radius: 10px;
  max-width: 100%;
  height: 50vh;
  overflow:auto;
}
.modal {
  display: none;
  position: fixed;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  overflow: auto;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content-wrapper {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  margin: auto;
  display: block;
  padding: 1rem;
  width: 75%;
  animation-name: zoom;
  animation-duration: 0.6s;
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

.btn-31,
.btn-31 *,
.btn-31 :after,
.btn-31 :before,
.btn-31:after,
.btn-31:before {
  border: 0 solid;
  box-sizing: border-box;
}

.btn-31 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
}

.btn-31:disabled {
  cursor: default;
}

.btn-31:-moz-focusring {
  outline: auto;
}

.btn-31 svg {
  display: block;
  vertical-align: middle;
}

.btn-31 [hidden] {
  display: none;
}

.btn-31 {
  border-width: 1px;
  padding: 1rem 2rem;
  position: relative;
  text-transform: uppercase;
}

.btn-31:before {
  --progress: 100%;
  background: #fff;
  -webkit-clip-path: polygon(100% 0, var(--progress) var(--progress), 0 100%, 100% 100%);
  clip-path: polygon(100% 0, var(--progress) var(--progress), 0 100%, 100% 100%);
  content: '';
  inset: 0;
  position: absolute;
  transition: -webkit-clip-path 0.2s ease;
  transition: clip-path 0.2s ease;
  transition:
    clip-path 0.2s ease,
    -webkit-clip-path 0.2s ease;
}

.btn-31:hover:before {
  --progress: 0%;
}

.btn-31 .text-container {
  display: block;
  overflow: hidden;
  position: relative;
}

.btn-31 .text {
  display: block;
  font-weight: 900;
  mix-blend-mode: difference;
  position: relative;
}

.btn-31:hover .text {
  -webkit-animation: move-up-alternate 0.3s ease forwards;
  animation: move-up-alternate 0.3s ease forwards;
}

@-webkit-keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(80%);
  }

  51% {
    transform: translateY(-80%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(80%);
  }

  51% {
    transform: translateY(-80%);
  }

  to {
    transform: translateY(0);
  }
}
</style>
