<script setup>
const props = defineProps(['stats', 'name', 'alignment'])

const alignmentClass = computed(() => {
  if (props.alignment === 'good' || props.alignment === 'bad')
    return props.alignment
  else
    return 'neutral'
})
</script>

<template>
  <div flex flex-col items-start justify-between px-3 py-2 color-gray-100 :class="alignmentClass">
    <h1 font-bold text-5>
      {{ name }}
    </h1>
    <StatField v-for="(value, key) in stats" :key="key" :name="key" :value="value" />
  </div>
</template>

<style scoped>
.good{
  background: linear-gradient(-45deg, var(--tuerkis), var(--blau));
}
.bad{
  background: linear-gradient(-45deg, var(--orange), var(--rot));
}
.neutral {
  background: linear-gradient(-45deg, var(--orange), var(--blau));
}
</style>
