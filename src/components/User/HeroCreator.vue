<script setup>
const imageLoader = ref(false)
function toggleImageLoader() {
  imageLoader.value = !imageLoader.value
}
</script>

<template>
  <div>
    <ImageCropper />
  </div>
</template>
