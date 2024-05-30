<template>
  <div class="card">
    <img :src="imgSrc" alt="" class="card-img">
    <div class="card-content">
      <h2>{{ heading }}</h2>
      <p class="truncate">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  heading?: string
  text?: string
  imgSrc: string
}

defineProps<CardProps>()
</script>

<style lang="scss" scoped>
// Colors
$color-primary-white: rgb(0, 0, 0);


.card {
  max-width: 100%; /* Ensure the card does not exceed the container's width */
  height: auto; /* Allow the height to adjust based on content */
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: $color-primary-white;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 100%; /* Ensure the image fills the container */
  height: auto; /* Allow the height to adjust based on the image's aspect ratio */
  object-fit: cover;
  opacity: 0.9;
  transition: opacity 0.2s ease-out;
}

.card-content {
  opacity: 0;
  color: rgb(255, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* Ensure the content spans the entire width of the container */
  padding: 30px; /* Adjust padding for spacing around content */
}

h2 {
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: normal;
  text-transform: uppercase;
}

p {
  opacity: 0;
  max-width: 80%;
  transition: opacity 0.3s ease-out;
}

.truncate {
  /* Add text-overflow and ellipsis for truncating text */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card:hover p {
  opacity: 1;
  transition: opacity 0.5s 0.1s ease-in;
}

.card:hover img {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

.card:hover .card-content {
  transition: opacity 0.3s ease-in;
  opacity: 1;
}


</style>
