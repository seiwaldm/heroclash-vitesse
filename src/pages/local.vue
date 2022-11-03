<script setup>
const localGameStore = useLocalGameStore()
const cardsStore = useCardsStore()

const playerCount = ref(1)
function updatePlayerCount(newValue) {
  playerCount.value = newValue
}

const deckSize = ref(10)
function updateDeckSize(newValue) {
  deckSize.value = newValue
}

function createGame() {
  localGameStore.createLocalGame('local', cardsStore.cards, deckSize.value, playerCount.value)
}

onUpdated(() => {
  playerCount.value = 1
  deckSize.value = 10
})
</script>

<template>
  <GameScreen v-if="localGameStore.localGame.players" mode="local" />
  <nav v-else flex flex-col gap-5>
    <SimpleSelector name="Players" min="0" max="2" @update="updatePlayerCount" />
    <SimpleSelector name="Deck Size" init-value="10" min="1" max="250" @update="updateDeckSize" />
    <button hc-font-style action-comics hover:scale text-7 @click="createGame">
      Start Game
    </button>
  </nav>
</template>
