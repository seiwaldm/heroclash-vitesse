<template>
  <img class="spinner" src="/heroclash-logo.png" alt="Loading Spinner">
</template>

<style scoped>
@keyframes rotateY {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}

.spinner {
    aspect-ratio: 1/1;
    animation-duration: 1.7s;
  animation-name: rotateY;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>
