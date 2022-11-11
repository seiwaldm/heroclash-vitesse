<script setup>
const imageLoader = ref(false)
function toggleImageLoader() {
  imageLoader.value = !imageLoader.value
}
</script>

<template>
  <div>
    <CustomCropper max-w="90vw" />
  </div>
</template>
