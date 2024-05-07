<template>
  <footer class="bg-gray-800 text-white font-medium py-8 footer">
    <AMenuButton class="h-[30vh]" />
     <div class="background-image"></div>
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
          <h3 class="text-lg header mb-4">Other Information</h3>
          <ul>
            <li><a href="#" class="text-white opacity-60  hover:opacity-100">Privacy Policy</a></li>
            <li><a href="#" class="text-white opacity-60  hover:opacity-100">Terms of Service</a></li>
            <!-- Add more links or information as needed -->
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="text-lg header mb-4">Follow Us</h3>
          <ul class="social-icons">
            <li><a href="#" class="text-white opacity-60 hover:opacity-100">Facebook</a></li>
            <li><a href="#" class="text-white opacity-60 hover:opacity-100">Twitter</a></li>
            <li><a href="#" class="text-white opacity-60 hover:opacity-100">Instagram</a></li>
            <!-- Add more social media links -->
          </ul>
        </div>
      </div>
      <div class="footer-bottom mt-8 text-center">
        <p class="text-white opacity-60">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AMenuButton from "@/components/atoms/nav/AMenuButton.vue"
</script>

<style scoped>
.footer {
  position: relative;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/SOP/img/wg-removebg.png");
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 1;
  z-index: 0;
  transition: opacity 0.5s ease; /* Smooth transition for opacity */
}

.footer:hover .background-image {
  opacity: 0; /* Make the background image transparent on hover */
}
</style>
