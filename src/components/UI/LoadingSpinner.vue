<script setup>
const props = defineProps(['message'])
</script>

<template>
  <div flex flex-col items-center gap-3 text-3 class="container3d">
    <img class="spinner" src="/heroclash-logo.png" alt="Loading Spinner">
    <div hc-font-style action-comics>
      {{ message }}
    </div>
  </div>
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
.container3d {
  perspective: 400px;
}
.spinner {
  aspect-ratio: 1/1;
  animation-duration: 1.7s;
  animation-name: rotateY;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-style:preserve-3d;
}
</style>
