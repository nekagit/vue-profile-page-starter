<template>
  

  <footer class="bg-gray-800 text-white font-medium footer">
    <AMenuButton class="h-[30vh]" />
    <hr />
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center text-center ">
        <div class="footer-section ">
          <h3 class="text-lg header mb-4">Contact</h3>
          <ul>
            <li> <a href="mailto:info@stichtingsoprotterdam.nl" class="text-white opacity-60">info@stichtingsoprotterdam.nl</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="text-lg header mb-4">Policies</h3>
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            <a
            href="https://www.stichtingsoprotterdam.nl/assets/sop-huishoudelijk-reglement.pdf"
            class="text-blueGray-500 hover:text-gray-800"
            target="_blank"
            >
            Reglement</a
            >
            <br />
            <a href="https://docuverse.netlify.app" class="text-blueGray-500 hover:text-gray-800"
            >DocuVerse</a
            >.
          </div>
        </div>
        <div>
          
          <div class="footer-section">
            <div class="lg:mb-0 mb-6">
              <button
              class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
            >
            <i class="fab fa-facebook"></i></button
            ><button
            class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
            >
            <i class="fab fa-instagram"></i></button
            ><button
            class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
            >
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
    
    <div class="footer-bottom mt-8 text-center">
      <p class="text-white opacity-60">&copy; 2024 Nenad Kalicanin.</p>
    </div>
  </div>
</footer>
<!-- <img src="../../../assets/SOP/img/logo.png" alt="pic" style="float: right;" /> -->
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AMenuButton from "@/components/atoms/nav/AMenuButton.vue"
</script>

<style scoped>
.footer {
  position: relative;
}

</style>
