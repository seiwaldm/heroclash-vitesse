<script setup lang="ts">
import { useCardsStore } from '~/store/cards'
const cards = useCardsStore()

onMounted(() => {
  cards.loadCards()
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Heroclash',
  meta: [
    { name: 'description', content: 'A Card Game developed at JOHAK' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
    { name: 'twitter:title', property: 'og:title', content: 'Heroclash' },
    { name: 'twitter:description', property: 'og:description', content: 'A Card Game developed at JOHAK' },
    { name: 'twitter:image', property: 'og:image', content: 'https://heroclash.seiwald.club/heroclash-logo.png' },
    { name: 'twitter:url', property: 'og:url', content: 'https://heroclash.seiwald.club' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
