<script setup>
const props = defineProps(['mode'])
const localGameStore = useLocalGameStore()
</script>

<template>
  <div flex flex-col justify-center mt-20>
    <div flex items-center gap-13>
      <HeroCard :hero="localGameStore.localGame.players[0].deck[0]" @discipline="localGameStore.handleCombat" />
      <GameScore :mode="props.mode" />
      <HeroCard :hero="localGameStore.localGame.players[1].deck[0]" @discipline="localGameStore.handleCombat" />
    </div>
    <button v-if="mode === 'local'" hc-font-style action-comics hover:scale mt-50 text-5 @click="localGameStore.resetGame">
      New Game
    </button>
  </div>
</template>
