<script setup>
const props = defineProps(['name', 'value'])
const emits = defineEmits(['discipline'])
</script>

<template>
  <div capitalize font-bold flex justify-between px-1 w="100%" border="1 gray-100" @click="emits('discipline', name, value)">
    <span>{{ name }}</span>
    <span>{{ value }}</span>
  </div>
</template>

