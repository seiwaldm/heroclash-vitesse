<script setup>
import db from '~/database/db.js'
import { useCardsStore } from '~/store/cards'

const cardStore = useCardsStore()
const counter = ref(0)
const filter = ref('')
const filteredHeroList = computed(() => {
  const result = cardStore.cards.map(card => card.data).filter(hero => hero.name.toLowerCase().includes(filter.value.toLowerCase()))
  if (result.length === 0)
    return [{ appearance: {}, biography: { alignment: 'neutral' }, connections: {}, name: 'Not found', id: '0', work: {}, images: { md: 'images/md/no-portrait.jpg' }, powerstats: { combat: 404, durability: 404, intelligence: 404, power: 404, speed: 404, strength: 404 }, slug: 'not-found' }]
  return result
})
const hero = computed(() => {
  return filteredHeroList.value[counter.value]
})

const countHeroes = computed(() => {
  return filteredHeroList.value.length
})

function updateHero(newCounter) {
  counter.value = newCounter - 1
}
</script>

<template>
  <div flex flex-col gap-1 items-center>
    <SimpleSelector name="Hero Nr." min="1" :max="countHeroes" @update="updateHero" />
    <div><input v-model="filter" type="text" placeholder="filter Heroes by Name..." b="1" rounded @input="counter = 0"></div>
    <HeroCard :hero="hero" my-4 />
    <div>(Click on Image for Character Details)</div>
  </div>
</template>
