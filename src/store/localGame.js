import { defineStore } from 'pinia'
import { ref } from 'vue'

import { Game } from '~/heroclash/heroclash.js'

export const useLocalGameStore = defineStore(
  'localGame',
  () => {
    const localGame = ref({})

    function createLocalGame(mode, baseDeck, deckSize, playerCount = 2, playerIds = ['Player 1', 'Player 2']) {
      localGame.value = new Game(mode, baseDeck, deckSize, playerCount, playerIds)
    }

    function handleCombat(discipline) {
      Game.handleCombat(discipline, localGame.value)
    }

    function chooseDiscipline(player) {
      return Game.chooseDiscipline(player)
    }

    function resetGame() {
      localGame.value = {}
    }

    return { localGame, createLocalGame, handleCombat, resetGame, chooseDiscipline }
  },
  {
    persist: true,
  },
)
