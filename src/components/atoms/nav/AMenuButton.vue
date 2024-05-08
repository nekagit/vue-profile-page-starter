<template>
  <div id="about-view">
    <button class="menu-button" @click="toggleMenu">
      <span></span>
    </button>
    <nav class="menu" :class="{ open: isMenuOpen }">
      <ul>
        <li><RouterLink @click="closeMenu" to="/">Home</RouterLink></li>
        <li><RouterLink @click="closeMenu" to="/gallery">Gallery</RouterLink></li>
        <li><RouterLink @click="closeMenu" to="/school">School</RouterLink></li>
        <li><RouterLink @click="closeMenu" to="/sport">Sport</RouterLink></li>
        <li><RouterLink @click="closeMenu" to="/anbi">ANBI</RouterLink></li>
        <li><RouterLink @click="closeMenu" to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
    <div class="flex justify-around flex-col md:flex-row text-white h-full text-center text-2xl">
      <img class="background-image2 hidden xl:flex" src="../../../assets/SOP/img/logoo.png" alt="sponsors"/>
      <img class="background-image" src="../../../assets/SOP/img/wg-removebg.png" alt="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped lang="scss">


.background-image {
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 1;
  z-index: -1;
  transition: opacity 0.5s ease; /* Smooth transition for opacity */
}
.background-image2 {
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 1;
  z-index: 1;
  transition: opacity 0.5s ease; /* Smooth transition for opacity */
}

.footer:hover .background-image .background-image2 {
  opacity: 0; /* Make the background image transparent on hover */
}
$base-duration: 250ms;

// Colors
$primary: slategray;
$accent: tomato;
$white: whitesmoke;
$black: #222;

// Breakpoints
$sm: 20rem;
$med: 48rem;
$lg: 64rem;

*, *:before, *:after {
box-sizing: border-box;
outline: none;
}

button {
cursor: pointer;
}

h3 {
margin: 0 0 0.75rem;
font-size: 1.5rem;
font-weight: bold;
}

p {
margin: 0 0 1.875rem;
font-size: 0.875rem;
line-height: 1.75;
}


section {
position: relative;
display: block;
width: 100%;
padding: 3.125rem 0;
}

.container {
position: relative;
width: 80%;
margin: 0 auto;
}

.menu-button {
position: fixed;
bottom: 10px;
right: 10px;
display: flex;
align-items: center;
justify-content: center;
width: 2.5rem;
height: 2.5rem;
background-color: $white;
border: 0;
border-radius: 50%;
animation: menuButton 1s ease;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
z-index: 99999;

&:hover {
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

&.open {
transform: rotate(360deg);

&:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

> span {
  background-color: transparent;
  transition: 0.5s ease;

  &:before {
    top: 0;
    transform: rotate(-45deg);
  }

  &:after {
    top: 0;
    transform: rotate(45deg);
  }
}
}

> span {
position: relative;
width: 1.25rem;
height: 0.125rem;
background-color: $black;
transform-origin: center center;

&:before, &:after {
  position: absolute;
  content: '';
  left: 0;
  width: 1.25rem;
  height: 0.125rem;
  background-color: $black
}

&:before {
  top: -0.3125rem;
}

&:after {
  top: 0.3125rem;
}
}

@keyframes menuButton {
0%   { transform: translateY(-400px); }
100% { transform: translateY(0%); }
}
}

nav.menu {
position: fixed;
bottom: 1px;
right: -100%;
width: 90%;
height: 100%;
padding: 3.25rem 0.625rem 1.25rem;
background-color: rgba($black,0.8);
transition: 0.25s ease;
z-index: 9999;

&.open {
right: 0%;

@media (min-width: $med) {
  width: 40%;
}
}

ul {
position: absolute;
bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin: 0;
padding: 0;

li {
  position: relative;
  display: block;
  width: 100%;
  text-align: right;

  a {
    position: relative;
    display: block;
    margin: 0;
    padding: 0.625rem 1.5rem;
    color: $white;
    z-index: 9;
  }
}
}

.dots {
position: absolute;
bottom: 1rem;
left: 1rem;
display: flex;
align-items: center;
justify-content: center;
height: 15px;
margin: 0;
cursor: pointer;

.dot {
  cursor: pointer;
  height: 0.5rem;
  width: 0.5rem;
  margin: 0 2px;
  background-color: rgba($black,0.6);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &.active, &:hover {
    background-color: $white;
  }

  &.active {
    width: 0.75rem;
    height: 0.75rem;
  }
}

}

.buttons {
position: absolute;
bottom: 0;
right: 0;
display: flex;
align-items: flex-end;
justify-content: flex-start;
margin: 0;
padding: 0;
z-index: 10;

> button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba($white,0.4);
  border: none;
  color: $white;
  cursor: pointer;

  &:hover {
    background-color: rgba($black,0.7);
  }
}
}
}



.fade {
-webkit-animation-name: fade;
-webkit-animation-duration: 1.5s;
animation-name: fade;
animation-duration: 1.5s;
}

@keyframes fade {
from { opacity: 0.4; }
to { opacity: 1; }
}

@keyframes image {
from { transform: translate(-100%,0%); }
to { transform: translate(0%,0%); }
}

</style>
