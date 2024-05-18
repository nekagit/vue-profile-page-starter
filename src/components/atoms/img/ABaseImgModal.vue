<template>
  <div class="shadow-xl my-5">
    <img id="myImg" src="@/assets/SOP/img/logoo.png" alt="Trolltunga, Norway" />

    <div id="myModal" class="modal p-6 bg-white">
      <!-- <img class="modal-content" id="img01" alt="Modal"/> -->
         <ABaseCardAnBorder
         class="modal-content"
      :content="content"
      :title="title"
      :sub-title="subTitle"
      :variant="2"
    />
      <!-- <div class="modal-content bg-white w-full h-full">
        <div>{{ title}}</div>
        <div>{{ subTitle }} </div>
        <div>{{content}}</div>
        <div>maybe tis will be an image</div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ABaseCardAnBorder from '../cards/cards/ABaseCardAnBorder.vue';
defineProps(["title", "subTitle", "content", "imgSrc", "images"])
const modal = ref()
const img = ref()
const modalImg = ref()

onMounted(() => {
  // Get the modal
  modal.value = document.getElementById('myModal')
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  img.value = document.getElementById('myImg')
  modalImg.value = document.getElementById('img01')

  img.value.onclick = function () {
    modal.value.style.display = 'block'
    modalImg.value.src = this.src
    modalImg.value.alt = this.alt
  }

  // When the user clicks on <span> (x), close the modal
  modal.value.onclick = function () {
    modal.value.style.display = 'none'
  }
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
  z-index: 999;
}

#myImg:hover {
  opacity: 0.7;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
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
