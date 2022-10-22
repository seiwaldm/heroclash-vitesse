<script setup>
const props = defineProps(['name'])
const emits = defineEmits(['update'])
const value = ref(0)
const counter = ref(1)

function countUp() {
  counter.value++
  emits('update', counter.value)
}

function countDown() {
  if (counter.value > 1) {
    counter.value--
    emits('update', counter.value)
  }
}
</script>

<template>
  <h1 hc-font-style action-comics text-7>
    {{ name }}
  </h1>
  <div flex m-3 justify-center>
    <span hc-font-style comic-kings text-15 cursor-pointer @click="countDown">&lt;</span>
    <input v-model="counter" type="number" min="1" hidden-controls text-center bg-transparent hc-font-style action-comics text-7 w="50%" @input="emits('update', counter)">
    <span hc-font-style comic-kings text-15 cursor-pointer @click="countUp">&gt;</span>
  </div>
</template>

<style>
* {border: 1px solid red}
</style>
