<script setup>
import db from '~/database/db.js'
const gameCreator = ref(false)
const router = useRouter()
const userStore = useUserStore()
const gameList = ref([])

const filteredGames = computed(() => {
  if (gameList.value.length > 0)
    return gameList.value.filter(game => game.data.players[0].id === userStore.user.profile.id || game.data.players[1].id === userStore.user.profile.id)
  return []
})

onMounted(() => {
  if (!userStore.user)
    router.push('/user')
  db.records.getFullList('games', 200, {}).then((res) => {
    gameList.value = res
  })
})
</script>

<template>
  <div>
    <div v-if="gameList.length > 0">
      <p hc-font-style action-comics text-5>
        Active Games
      </p>
      <div my="8">
        <div class="activeGames" font-bold text-5 mb="5">
          <div>created</div>
          <div>Player 1</div>
          <div>Player 2</div>
        </div>
        <div
          v-for="game in filteredGames" :key="game.id" class="activeGames" cursor-pointer
          @click="router.push(`/online/${game.id}`)"
        >
          <div>{{ game.created.substring(0, 16) }}</div>
          <div>{{ game.data.players[0].name ? game.data.players[0].name : game.data.players[0].id }}</div>
          <div>{{ game.data.players[1].name ? game.data.players[1].name : game.data.players[1].id }}</div>
        </div>
      </div>

      <button hc-font-style action-comics hover:scale text-5 @click="gameCreator = true">
        New Online Game
      </button>
    </div>
  </div>
</template>

<style scopted>
.activeGames {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
