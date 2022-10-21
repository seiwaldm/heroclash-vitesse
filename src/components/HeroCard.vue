<script setup>
const props = defineProps(['hero'])
</script>

<template>
  <div class="card">
    <HeroImage />
    <HeroStats />
  </div>
</template>

<style scoped>
.card{
    width: 330px;
    height: 230px;
}
</style>
