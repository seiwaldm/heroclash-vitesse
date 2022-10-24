<script setup>
const props = defineProps(['imageUrl', 'heroId'])
const prefix = computed(() =>
  props.heroId < 800
    ? 'https://raw.githubusercontent.com/akabab/superhero-api/master/.backup/'
    : 'https://hcpb.seiwald.club/')
</script>

<template>
  <img :src="`${prefix + imageUrl}`" alt="imageUrl">
</template>

<style scoped>

</style>
