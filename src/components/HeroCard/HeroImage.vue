<script setup>
const props = defineProps(['imageUrl', 'heroId'])
const emits = defineEmits(['showBiography'])
const prefix = computed(() =>
  props.heroId < 800
    ? 'https://raw.githubusercontent.com/akabab/superhero-api/master/.backup/'
    : '')
</script>

<template>
  <img :src="`${prefix + imageUrl}`" alt="No Image" @click="emits('showBiography')">
</template>
