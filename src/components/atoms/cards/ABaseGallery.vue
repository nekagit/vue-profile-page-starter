<template>
<ul>
  <li v-for="img in images" :key="img"> <img :src="img" alt="cut citrus fruits. " />Lorem Ipsum</li>
</ul>
</template>

<script setup lang="ts">
defineProps(["images"])
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
}

*,
body,
html {
  &::-webkit-scrollbar {
    background-color: #1e1f26;
    height: 20px;
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #383d4d;
    border-radius: 99em;
    border: 6px solid #1e1f26;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: clamp(20px, 2.5vw, 36px);
  color: rgba(#fff, 0.8);
  font-weight: 600;
  text-align: center;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1.5rem;
}

ul {
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  text-align: center;
  scroll-behavior: smooth;
}

li {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  width: min(50vw, 350px);
  display: inline-block;
  text-align: center;
  background-color: #16171f;
  color: #9b9dad;
  padding-bottom: 1.5rem;
  font-size: clamp(18px, 2.5vw, 22px);
  box-shadow: -10px 0 30px 0 rgba(#000, 0.25);
  margin-left: -4px;
}

body {
  font-family: "Inter", sans-serif;
  background-color: #1e1f26;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

</style>