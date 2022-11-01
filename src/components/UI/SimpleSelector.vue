<script setup>
const props = defineProps({
  name: String,
  initValue: {
    type: String,
    default: '1',
  },
  min: String,
  max: String,
})
const emits = defineEmits(['update'])
const counter = ref(props.initValue)

function countUp() {
  if (counter.value < props.max)
    counter.value++
  emits('update', counter.value)
}

function countDown() {
  if (counter.value > props.min) {
    counter.value--
    emits('update', counter.value)
  }
}
</script>

<template>
  <div>
    <h1 hc-font-style action-comics text-7>
      {{ name }}
    </h1>
    <div flex m-3 justify-center>
      <span hc-font-style hover:scale comic-kings text-15 cursor-pointer @click="countDown">&lt;</span>
      <input v-model="counter" type="number" :min="min" :max="max" hidden-controls text-center bg-transparent hc-font-style action-comics text-7 w="200px" @input="emits('update', counter)">
      <span hc-font-style hover:scale comic-kings text-15 cursor-pointer @click="countUp">&gt;</span>
    </div>
  </div>
</template>

