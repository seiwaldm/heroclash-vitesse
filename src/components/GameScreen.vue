<script setup>
const localGameStore = useLocalGameStore()
</script>

<template>
  <div>
    <HeroCard :hero="localGameStore.localGame.players[0].deck[0]" @discipline="localGameStore.handleCombat" />
    <HeroCard :hero="localGameStore.localGame.players[1].deck[0]" @discipline="localGameStore.handleCombat" />
    <button @click="localGameStore.resetGame">
      New Game
    </button>
  </div>
</template>
