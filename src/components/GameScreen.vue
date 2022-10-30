<script setup>
// const props = defineProps(['game'])
const localGameStore = useLocalGameStore()
</script>

<template>
  <div>
    <HeroCard :hero="localGameStore.localGame.players[0].deck[0]" @discipline="localGameStore.handleCombat" />
    <HeroCard :hero="localGameStore.localGame.players[1].deck[0]" @discipline="localGameStore.handleCombat" />
    <h1>GAME</h1>
    <p>{{ game }}</p>
  </div>
</template>
