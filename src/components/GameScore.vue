<script setup>
import { useLocalGameStore } from '~/store/localGame'
const localGameStore = useLocalGameStore()
</script>

<template>
  <div flex gap-9 items-end>
    <PlayerScore :name="localGameStore.localGame.players[0].name" :score="localGameStore.localGame.players[0].deck.length" />
    <div>
      <div>Heap</div>
      <div>{{ localGameStore.localGame.heap.length }}</div>
    </div>
    <PlayerScore :name="localGameStore.localGame.players[1].name" :score="localGameStore.localGame.players[1].deck.length" />
  </div>
</template>
