<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto py-8 px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo -->
        <div class="footer-logo">
          <h1 class="text-2xl font-bold"></h1>
        </div>
        <!-- Links -->
        <div class="footer-links">
          <h2 class="text-lg font-semibold mb-4"></h2>
          <ul class="footer-menu space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-gray-500"></a></li>
            <li><a href="#" class="text-gray-300 hover:text-gray-500"></a></li>
            <li><a href="#" class="text-gray-300 hover:text-gray-500"></a></li>
            <li><a href="#" class="text-gray-300 hover:text-gray-500"></a></li>
          </ul>
        </div>
        <!-- Social Icons -->
        <div class="footer-social">
          <h2 class="text-lg font-semibold mb-4"></h2>
          <ul class="social-icons space-x-4">
            <li><a href="#"><i class="fab fa-facebook-f text-gray-300 hover:text-gray-500"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter text-gray-300 hover:text-gray-500"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram text-gray-300 hover:text-gray-500"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin-in text-gray-300 hover:text-gray-500"></i></a></li>
          </ul>
        </div>
      </div>
      <!-- Bottom Text -->
      <div class="footer-bottom mt-8 text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  border-radius: 10px;
}

.footer-menu li {
  display: block;
}

.footer-menu a {
  color: #fff;
}

.social-icons li {
  display: inline-block;
}

.footer-bottom p {
  margin: 0;
}
</style>
