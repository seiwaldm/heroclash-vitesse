<script setup>
const props = defineProps(['log'])
const emits = defineEmits(['close'])
const list = ref(null)

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
const reverseLog = computed(() => {
  return props.log.slice().reverse()
})
</script>

<template>
  <div>
    <DragResize v-if="log" :x="20" :y="40" left-4 rounded-1 overflow-hidden :w="360" class="container" z-10>
      <div i-carbon-close-outline text-5 absolute right-1 top-1 cursor-pointer @click="emits('close')" />
      <div text-5 font-bold>
        Game Log
      </div>
      <div flex flex-col-reverse items-center max-h="80%" max-w="100%" overflow-auto gap-2 px-3 pt-3 scroll-smooth>
        <div v-for="(entry, index) in reverseLog" :key="index" class="log" gap-2 w="100%">
          <div text-right>
            {{ reverseLog.length - index }}
          </div>
          <div class="entry" gap-2 items-center w="100%">
            <div flex gap-2 justify-end items-center>
              <div text-right>
                {{ entry.hero1 }}
              </div>
              <div>{{ entry.value1 }}</div>
            </div>
            <div :class="icon(entry.discipline)" mx-2 />
            <div flex gap-2 items-center>
              <div>
                {{ entry.value2 }}
              </div>
              <div text-left>
                {{ entry.hero2 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DragResize>
  </div>
</template>

<style scoped>
.container{
    background: rgba(255, 255, 255, 0.6);
    filter: drop-shadow(15px 15px 15px);
    backdrop-filter: blur(5px);
    color: #374151
}

.log{
  line-height: 1.1rem;
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center
}

.entry{
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  align-content: center
}
</style>
