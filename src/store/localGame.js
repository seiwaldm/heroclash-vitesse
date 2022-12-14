import { defineStore } from 'pinia'
import { ref } from 'vue'

import { Game } from '~/heroclash/heroclash.js'
export const useLocalGameStore = defineStore(
  'games',
  () => {
    const games = ref({})

    function createGame(baseDeck, deckSize, playerCount = 2) {
      games.value['999'] = new Game(baseDeck, deckSize, playerCount)
    }

    function resetLocalGame() {
      games.value['999'] = null
    }

    return { games, createGame, resetLocalGame }
  },
  {
    persist: true,
  },
)
