<script setup>
const props = defineProps(['stats', 'name', 'alignment'])
const emits = defineEmits(['discipline'])

const alignmentClass = computed(() => {
  if (props.alignment === 'good' || props.alignment === 'bad')
    return props.alignment
  else
    return 'neutral'
})

function discipline(name) {
  emits('discipline', name)
}
</script>

<template>
  <div flex flex-col items-start justify-between px-3 py-2 color-gray-100 :class="alignmentClass">
    <h1 font-bold text-5 style="lineHeight:1.4rem">
      {{ name }}
    </h1>
    <StatField v-for="(value, key) in stats" :key="key" :name="key" :value="value" @discipline="discipline" />
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
