<script setup>
const props = defineProps(['hero'])
</script>

<template>
  <div class="herocard" grid overflow-hidden border="1 gray-200 rounded ">
    <HeroImage :image-url="hero.images.md" />
    <HeroStats />
  </div>
</template>

<style scoped>
.herocard{
    /* width: 320px;
    height: 240px; */
    aspect-ratio: 4/3;
    grid-template-columns: 1fr 1fr;
}
</style>
