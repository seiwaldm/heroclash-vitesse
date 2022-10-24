import { defineStore } from 'pinia'
import { ref } from 'vue'
import db from '~/database/db.js'

export const useCardsStore = defineStore('cards', () => {
  const cards = ref([])

  async function loadCards() {
    const data = await db.records.getFullList('heroes', 200 /* batch size */, {
      sort: 'created',
    })
    cards.value = data
  }

  return { cards, loadCards }
},

)
