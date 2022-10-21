<script setup>
const props = defineProps(['imageUrl'])
</script>

<template>
  <img :src="`https://hcpb.seiwald.club/${imageUrl}`" alt="imageUrl">
</template>

<style scoped>

</style>
