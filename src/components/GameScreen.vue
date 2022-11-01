<script setup>
const props = defineProps(['mode'])
const localGameStore = useLocalGameStore()
const winner = computed(() => localGameStore.localGame.players[0].deck.length > 0 ? localGameStore.localGame.players[0].name : localGameStore.localGame.players[1].name)
const bgColor = computed(() => isDark.value ? '#121212' : '#ffffff')
</script>

<template>
  <div flex flex-col justify-center gap-15 class="mobile-cover-screen" h="50vh" z-1 :style="{ backgroundColor: bgColor }">
    <div v-if="localGameStore.localGame.running" flex flex-col lg:flex-row items-center gap-13>
      <HeroCard :hero="localGameStore.localGame.players[0].deck[0]" @discipline="localGameStore.handleCombat" />
      <GameScore :mode="props.mode" />
      <HeroCard :hero="localGameStore.localGame.players[1].deck[0]" @discipline="localGameStore.handleCombat" />
    </div>
    <div v-else hc-font-style action-comics text-10 flex flex-col gap-6>
      <div>Game Over</div> <div text-8>
        {{ winner }} wins
      </div>
    </div>
    <button v-if="mode === 'local'" hc-font-style action-comics hover:scale text-5 @click="localGameStore.resetGame">
      New Game
    </button>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .mobile-cover-screen {
    position: absolute;
    height: 100vh;
    width: 100vw;

  }
}
</style>
