<script setup>
const emits = defineEmits(['showLog'])
const localGameStore = useLocalGameStore()
</script>

<template>
  <div flex flex-col gap-7 items-center>
    <div flex gap-9 items-end font-bold>
      <PlayerScore :name="localGameStore.localGame.players[0].name" :score="localGameStore.localGame.players[0].deck.length" />
      <div>
        <div>Heap</div>
        <div>{{ localGameStore.localGame.heap.length }}</div>
      </div>
      <PlayerScore :name="localGameStore.localGame.players[1].name" :score="localGameStore.localGame.players[1].deck.length" />
    </div>
    <button button @click="emits('showLog')">
      Show Log
    </button>
  </div>
</template>
