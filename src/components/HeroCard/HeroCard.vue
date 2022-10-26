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
    grid-template-columns: 160px 180px;
}
</style>
