<script setup>
import Vue3DraggableResizable from 'vue3-draggable-resizable'
// default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

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
    <Vue3DraggableResizable :init-h="250" rounded-1 p-2 class="container" relative m-auto>
      <div absolute right="3" top="1" cursor-pointer @click="emits('close')">
        X
      </div>
      <div flex flex-col items-center overflow-auto max-h="100%">
        <div text-5>
          Game Log
        </div>
        <div v-for="(entry, index) in log" :key="index" class="log" w="100%">
          <div flex gap-5 items-center justify-between w="100%">
            <div>Round {{ index + 1 }}</div>
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
    </Vue3DraggableResizable>
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
