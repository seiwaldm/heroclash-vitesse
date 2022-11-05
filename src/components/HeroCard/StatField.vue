<script setup>
const props = defineProps(['name', 'value'])
const emits = defineEmits(['discipline'])
const icon = computed(() => {
  switch (props.name) {
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
})
const localGameStore = useLocalGameStore()
</script>

<template>
  <div capitalize font-bold flex justify-between gap-1 items-center px-1 w="100%" border="1 gray-100" cursor-pointer hover:bg-black :class="{ chosenDiscipline: name === localGameStore.localGame.currentDiscipline }" @click="emits('discipline', name)">
    <div :class="icon" inline-block pt="1" /><span>  {{ name }}</span>
    <span ml="auto">{{ value }}</span>
  </div>
</template>

<style scoped>
.chosenDiscipline {
  background-color: #000000;
  color: #ffffff;
}
</style>
