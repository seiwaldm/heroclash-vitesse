import { defineStore } from 'pinia'
import { ref } from 'vue'

import { Game } from '~/heroclash/heroclash.js'
export const useLocalGameStore = defineStore(
  'games',
  () => {
    const games = ref({})

    function createGame(baseDeck, deckSize, playerCount = 2, playerIds = ['Player 1', 'Player 2'], id = '999') {
      console.log(id)
      games.value[id] = new Game(baseDeck, deckSize, playerCount, playerIds)
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
