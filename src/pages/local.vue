<script setup>
import { useLocalGameStore } from '~/store/localGame'
import { useCardsStore } from '~/store/cards.js'

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
</script>

<template>
  <GameScreen v-if="localGameStore.localGame.running" />
  <nav v-else>
    <SimpleSelector name="Players" init-value="1" min="0" max="2" @update="updatePlayerCount" />
    <SimpleSelector name="Deck Size" init-value="10" min="1" max="250" @update="updateDeckSize" />
    <button hc-font-style action-comics hover:scale text-7 @click="createGame">
      Start Game
    </button>
  </nav>
</template>
