<template>
  
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto py-8 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <AMenuButton class="h-[30vh]" />
        <!-- Logo -->
        <div class="footer-logo flex items-center">
          <h1 class="text-2xl font-bold">Stichting SOP Rotterdam</h1>
        </div>
        <!-- Social Icons -->
      </div>
      <!-- Bottom Text -->
      <div class="footer-bottom mt-8 text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>


<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AMenuButton from "@/components/atoms/nav/AMenuButton.vue"
</script>

<style scoped>
.footer-logo h1 {
  color: #fff;
}

.footer-links .nav-link {
  color: #fff;
}

.social-icons a:hover {
  color: #fff;
}
</style>
