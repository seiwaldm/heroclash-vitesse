<script setup>
const props = defineProps(['hero'])
</script>

<template>
  <div class="herocard" grid w="340px" overflow-hidden border="1 gray-200 rounded-2 ">
    <HeroImage :image-url="hero.images.md" :hero-id="hero.id" />
    <HeroStats :name="hero.name" :stats="hero.powerstats" :alignment="hero.biography.alignment" />
  </div>
</template>

<style scoped>
.herocard{
    /* width: 320px;
    height: 240px; */

    grid-template-columns: 1fr 1.2fr;
}
</style>
