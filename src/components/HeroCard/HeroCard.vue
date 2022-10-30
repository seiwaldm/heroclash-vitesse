<script setup>
const props = defineProps(['hero'])
const emits = defineEmits(['discipline'])

function discipline(name) {
  emits('discipline', name)
}
</script>

<template>
  <div class="herocard" grid w="340px" overflow-hidden border="1 gray-200 rounded-2 ">
    <HeroImage :image-url="hero.images.md" :hero-id="hero.id" />
    <HeroStats :name="hero.name" :stats="hero.powerstats" :alignment="hero.biography.alignment" @discipline="discipline" />
  </div>
</template>

<style scoped>
.herocard{
    grid-template-columns: 160px 180px;
}
</style>
