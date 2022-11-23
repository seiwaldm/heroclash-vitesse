<script setup>
import { db } from '~/database/db'

const gameCreator = ref(false)
</script>

<template>
  <p>Active Games:</p>

  <button hc-font-style action-comics hover:scale text-5 @click="gameCreator = true">
    New Online Game
  </button>
</template>
