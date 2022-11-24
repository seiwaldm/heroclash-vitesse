<script setup>
const props = defineProps(['game'])
const emits = defineEmits(['showLog'])
const localGameStore = useLocalGameStore()
</script>

<template>
  <div flex flex-col gap-7 items-center>
    <div flex gap-9 items-end font-bold>
      <PlayerScore :name="game.players[0].name" :score="game.players[0].deck.length" />
      <div>
        <div>Heap</div>
        <div>{{ game.heap.length }}</div>
      </div>
      <PlayerScore :name="game.players[1].name" :score="game.players[1].deck.length" />
    </div>
    <button button @click="emits('showLog')">
      Show Log
    </button>
  </div>
</template>
