<script setup>
const props = defineProps(['name'])
const value = ref(0)
const counter = ref(1)
</script>

<template>
  <h1 hc-font-style action-comics text-7>
    {{ name }}
  </h1>
  <div flex m-3 justify-center>
    <span hc-font-style comic-kings text-15 @click="counter--">&lt;</span>
    <input v-model="counter" min="1" type="number" hidden-controls text-center bg-transparent hc-font-style action-comics text-7 w="50%">
    <span hc-font-style comic-kings text-15 @click="counter++">&gt;</span>
  </div>
</template>

<style>
* {border: 1px solid red}
</style>
