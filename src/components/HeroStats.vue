<script setup>
const props = defineProps(['stats', 'name', 'alignment'])
</script>

<template>
  <div flex flex-col items-start justify-between px-3 py-2 color-gray-100 :class="alignment">
    <h1 font-bold text-5>
      {{ name }}
    </h1>
    <StatField v-for="(value, key) in stats" :key="key" :name="key" :value="value" />
  </div>
</template>

<style scoped>
.good{
  background: linear-gradient(-45deg, #80ccdb, #005577);
}
.bad{
  background: linear-gradient(-45deg, #f7a823, #e4003a);
}
.neutral {
  background: linear-gradient(-45deg, #f7a823, #005577);
}
</style>
