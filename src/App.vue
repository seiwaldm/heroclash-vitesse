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
  title: 'Heroclash - developed at JOHAK',
  meta: [
    { name: 'title', content: 'Heroclash - developed at JOHAK' },
    { name: 'description', content: 'Ein digitales Supertrumpf-Kartenspiel - sei dabei und erstelle deine eigenen Hero!' },

    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://heroclash.seiwald.club' },
    { property: 'og:title', content: 'Heroclash - developed at JOHAK' },
    { property: 'og:description', content: 'Ein digitales Supertrumpf-Kartenspiel - sei dabei und erstelle deinen eigenen Hero!' },
    { property: 'og:image', content: 'https://heroclash.seiwald.clubheroclash-logo-social.png' },

    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://heroclash.seiwald.clubmenu' },
    { property: 'twitter:title', content: 'Heroclash - developed at JOHAK' },
    { property: 'twitter:description', content: 'Ein digitales Supertrumpf-Kartenspiel - sei dabei und erstelle deinen eigenen Hero!' },
    { property: 'twitter:image', content: 'https://heroclash.seiwald.club/heroclash-logo-social.png' },

    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },

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
