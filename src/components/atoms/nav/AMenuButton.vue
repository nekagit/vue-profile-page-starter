<template>
  <div id="about-view">
    <button class="menu-button" @click="toggleMenu">
      <span></span>
    </button>
    <nav class="menu" :class="{ open: isMenuOpen }">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About Us</RouterLink></li>
        <li><RouterLink to="/services">Services</RouterLink></li>
        <li><RouterLink to="/pricing">Pricing</RouterLink></li>
        <li><RouterLink to="/profile">Profile</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
    <div class="slideshow-container">
      <!-- Your slideshow content here -->
    </div>
    <section>
      <!-- Your section content here -->
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slideIndex = ref(1)
const isMenuOpen = ref(false)

function changeSlide(n: number) {
  showSlides((slideIndex.value += n))
}

function currentSlide(n: number) {
  showSlides((slideIndex.value = n))
}

function showSlides(n: number) {
  const slides = document.querySelectorAll('.slide')
  const dots = document.querySelectorAll('.dot')
  let i: number

  if (n > slides.length) {
    slideIndex.value = 1
  }
  if (n < 1) {
    slideIndex.value = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex.value - 1].style.display = 'block'
  dots[slideIndex.value - 1].className += ' active'
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped lang="scss">


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

html {
font-family: 'Source Sans Pro', sans-serif;
font-size: 16px;
font-smooth: auto;
font-weight: 300;
line-height: 1.5;
color: #444;
}

body {
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
//height: 100vh;
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
position: absolute;
top: 1.25rem;
right: 1.25rem;
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
top: 0;
right: -100%;
width: 90%;
height: 100%;
padding: 6.25rem 0.625rem 1.25rem;
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
position: relative;
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
}

.slideshow-container {
position: relative;
width: 100%;
height: 40vh;
margin: auto;
//background-color: rgba($accent,0.3);
overflow: hidden;

@media (min-width: $med) {
height: 50vh;
}

@media (min-width: $lg) {
height: 60vh;
}

.slide {
display: none;

.index {
  position: absolute;
  top: 12.5%;
  left: 2rem;
  padding: 0.5rem 0 0.5rem 0.625rem;
  color: #f2f2f2;
  font-size: 12px;
  z-index: 9;

  > span {
    position: absolute;
    top: 30.2%;
    left: 0;
    font-weight: bold;
    animation: slideDown 1s ease;
  }

  @media (min-width: $med) {
    top: 30.2%;
  }

  @media (min-width: $lg) {
    top: 41.5%;

    > span {
      top: 29%;
    }
  }

  @keyframes slideDown {
    0%   { top: -1000%; }
    100% { top: 54%; }
  }
}

.caption {
  position: absolute;
  bottom: 7.25rem;
  left: 1.25rem;
  width: 17.25rem;
  color: #f2f2f2;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1rem 1rem;
  background-color: rgba($black,0.7);
  border-left: 0.625rem solid $accent;
  transform: translateX(0%);
  animation: slideIn 1s ease;

  @keyframes slideIn {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }

  small {
    font-size: 0.75rem;
    font-weight: 300;
  }
}

.cta {
  position: absolute;
  bottom: 5rem;
  left: 1.25rem;
  margin: 0 0 0 0.625rem;
  padding: 0.625rem 1.25rem;
  background-color: rgba($black,0.6);
  border: 0;
  //border-radius: 9.375rem;
  color: $white;
  font-size: 0.625rem;
  text-transform: uppercase;
  transform: translateY(0%);
  transition: 0.25s;
  animation: slideUp 0.75s ease;
  z-index: 9;

  &:hover {
    background-color: $accent;
  }

  @keyframes slideUp {
    0%   { transform: translateY(400%); }
    100% { transform: translateY(0%); }
  }
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 200%;
  //object-fit: cover;
}
}


.dots {
position: absolute;
bottom: 1rem;
left: 1rem;
display: flex;
align-items: center;
justify-content: center;
//width: 25%;
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




/* Number text (1/3 etc) */



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
