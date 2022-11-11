<script setup>
const route = useRoute()
const cardsStore = useCardsStore()
const hero = computed(() => {
  if (route.params.heroCounter <= cardsStore.cards.length && route.params.heroCounter > 0)
    return cardsStore.cards[route.params.heroCounter - 1].data
  return { appearance: {}, biography: { alignment: 'neutral' }, connections: {}, name: 'Not found', id: '0', work: {}, images: { md: 'images/md/no-portrait.jpg' }, powerstats: { combat: 404, durability: 404, intelligence: 404, power: 404, speed: 404, strength: 404 }, slug: 'not-found' }
})
</script>

<template>
  <div v-if="hero">
    <HeroCard :hero="hero" my-4 />
    <div>(Click on Image for Character Details)</div>
  </div>
</template>
