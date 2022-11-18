<script setup>
import VueDragResize from 'vue3-drag-resize'

const props = defineProps(['log'])
const emits = defineEmits(['close'])

function icon(discipline) {
  switch (discipline) {
    case 'strength':
      return 'i-game-icons-muscle-up'
    case 'speed':
      return 'i-game-icons-speedometer'
    case 'durability':
      return 'i-game-icons-checked-shield'
    case 'combat':
      return 'i-game-icons-crossed-swords'
    case 'intelligence':
      return 'i-game-icons-brain'
    case 'power':
      return 'i-game-icons-plasma-bolt'
  }
}
</script>

<template>
  <div>
    <VueDragResize rounded-1 p-2 :w="400" class="container">
      <div absolute right="3" top="1" cursor-pointer @click="emits('close')">
        X
      </div>
      <div flex flex-col items-center overflow-auto max-h="100%">
        <div text-5>
          Game Log
        </div>
        <div v-for="(entry, index) in log" :key="index" class="log" w="100%" my-3>
          <div flex gap-5 items-center justify-between w="100%">
            <div>{{ index + 1 }}</div>
            <div flex gap-2 items-center justify-center w="100%">
              <div>{{ entry.hero1 }} </div>
              <div>{{ entry.value1 }}</div>
              <div :class="icon(entry.discipline)" mx-3 />
              <div>
                {{ entry.value2 }}
              </div>
              <div>{{ entry.hero2 }}</div>
            </div>
          </div>
        </div>
      </div>
    </VueDragResize>
  </div>
</template>

<style scoped>
.container{
    background: rgba(255, 255, 255, 0.6);
    filter: drop-shadow(15px 15px 15px);
    backdrop-filter: blur(10px);
    color: #374151
}
</style>
