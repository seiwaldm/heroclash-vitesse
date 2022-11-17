<script setup>
import Vue3DraggableResizable from 'vue3-draggable-resizable'
// default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

const props = defineProps(['game'])
const emits = defineEmits(['close'])
</script>

<template>
  <div>
    <Vue3DraggableResizable :init-w="300" :init-h="250" rounded-1 class="container" relative>
      <div absolute right="3" top="1">
        X
      </div>
      <div flex flex-col items-center>
        <div text-5>
          Game Log
        </div>
      </div>
    </Vue3DraggableResizable>
  </div>
</template>

<style scoped>
.container{
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    color: #374151
}
</style>
