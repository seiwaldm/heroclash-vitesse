<script setup>
const props = defineProps(['name', 'score'])
</script>

<template>
  <div>
    <div class="text-5">
      {{ props.name }}
    </div>
    <div class="text-5">
      {{ props.score }}
    </div>
  </div>
</template>
