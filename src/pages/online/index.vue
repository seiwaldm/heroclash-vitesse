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
      <div>{{ gameList }}</div>
    </div>

    <button hc-font-style action-comics hover:scale text-5 @click="gameCreator = true">
      New Online Game
    </button>
  </div>
</template>
