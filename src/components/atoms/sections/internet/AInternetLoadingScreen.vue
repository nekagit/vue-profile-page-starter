<template>
  <div class="loadingBody">
    <div class="loading-container">
      <div class="loading-text">
        <span>S</span>
        <span>O</span>
        <span>P</span>
      </div>
    </div>
    <div class="socials">
      <a class="social-link" href="https://twitter.com/aybukeceylan" target="_top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-twitter"
        >
          <path
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
          />
        </svg>
      </a>
      <a class="social-link" href="https://www.linkedin.com/in/ayb%C3%BCkeceylan/" target="_top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-linkedin"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.loadingBody {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(0, 152, 155, 1) 0.1%,
    rgba(0, 94, 120, 1) 94.2%
  );
  background-size: 100%;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}

.loading-container {
  width: 100%;
  max-width: 520px;
  text-align: center;
  color: #fff;
  position: relative;
  margin: 0 32px;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    animation: movingLine 2.4s infinite ease-in-out;
  }
}

@keyframes movingLine {
  0% {
    opacity: 0;
    width: 0;
  }

  33.3%,
  66% {
    opacity: 0.8;
    width: 100%;
  }

  85% {
    width: 0;
    left: initial;
    right: 0;
    opacity: 1;
  }

  100% {
    opacity: 0;
    width: 0;
  }
}

.loading-text {
  font-size: 5vw;
  line-height: 64px;
  letter-spacing: 10px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-evenly;
  span {
    animation: moveLetters 2.4s infinite ease-in-out;
    transform: translatex(0);
    position: relative;
    display: inline-block;
    opacity: 0;
    text-shadow: 0px 2px 10px rgba(46, 74, 81, 0.3);
  }
}

@for $i from 1 through 7 {
  .loading-text span:nth-child(#{$i}) {
    animation-delay: $i * 0.1s;
  }
}

@keyframes moveLetters {
  0% {
    transform: translateX(-15vw);
    opacity: 0;
  }

  33.3%,
  66% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(15vw);
    opacity: 0;
  }
}

.socials {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
}

.social-link {
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  margin-right: 12px;
}
</style>
