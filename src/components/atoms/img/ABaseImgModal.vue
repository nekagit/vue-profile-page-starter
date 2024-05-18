<template>
  <img :id="'myImg' + uniqueId" class="z-0" :src="imgSrc" alt="imgSrc" @click="openModal" />
  <div class="shadow-xl my-5">

    <div :id="'myModal' + uniqueId" class="modal p-6 bg-white" @click="closeModal">
      <ABaseCardAnBorder
        class="modal-content z-10"
        :content="content"
        :title="title"
        :sub-title="subTitle"
        :variant="2"
      />
      <img v-for="(img, imgIndex) in images" class="z-0" :key="imgIndex" :src="img" alt="img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ABaseCardAnBorder from '../cards/cards/ABaseCardAnBorder.vue'
defineProps(['title', 'subTitle', 'content', 'imgSrc', 'images'])

const uniqueId = ref(Math.random().toString(36).substr(2, 9))
const modal = ref()

const openModal = () => {
  modal.value.style.display = 'block'
}

const closeModal = () => {
  modal.value.style.display = 'none'
}

onMounted(() => {
  modal.value = document.getElementById('myModal' + uniqueId.value)
})
</script>

<style scoped>
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index:0!important;
}

#myImg:hover {
  opacity: 0.7;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  z-index:999;
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 75%;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

.out {
  animation-name: zoom-out;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(1);
  }
  to {
    -webkit-transform: scale(2);
  }
}

@keyframes zoom {
  from {
    transform: scale(0.4);
  }
  to {
    transform: scale(1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
