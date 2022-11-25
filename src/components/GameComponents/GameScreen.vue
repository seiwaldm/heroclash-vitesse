<script setup>
import { Game } from '~/heroclash/heroclash.js'
import db from '~/database/db.js'

const bgColor = computed(() => isDark.value ? '#121212' : '#ffffff')
const visible1 = ref(false)
const visible2 = ref(false)
const showLog = ref(false)
const route = useRoute()

const settingsStore = useSettingsStore()

const localGameStore = useLocalGameStore()
const userStore = useUserStore()

const game = ref(null)
const winner = computed(() => game.value.players[0].deck.length > 0 ? game.value.players[0].name : game.value.players[1].name)

const isSpectator = computed(() => {
  if (game) {
    if (game.id !== 999) {
      let playerId = ''
      if (game.value.players[0].initiative)
        playerId = game.value.players[0].id
      else if (game.value.players[1].initiative)
        playerId = game.value.players[1].id
      if (playerId !== userStore.user.profile.id)
        return true
    }
  }
  return false
})

function handleCombat(discipline) {
  game.value.currentDiscipline = discipline
  visible1.value = true
  visible2.value = true
  if (route.path.includes('online'))
    db.records.update('games', route.params.id, { data: game.value })

  setTimeout(() => {
    visible1.value = false
    visible2.value = false
    setTimeout(() => {
      Game.handleCombat(discipline, game.value)
      if (route.path.includes('online')) {
        db.records.update('games', route.params.id, { data: game.value })
        console.log('sometimes i hate linting')
        // checkVisibility()}
      }
    }, 800)
  }, 2000)
}

function checkVisibility() {
  const thisPlayer = game.value.players.filter(player => player.id === userStore.user.profile.id)[0]
  if (!thisPlayer.initiative) {
    visible1.value = true
    visible2.value = true
  }
}

function botTurn() {
  if (game.value && game.value.running) {
    if (game.value.players[0].initiative && game.value.players[0].bot) {
      const discipline = Game.chooseDiscipline(game.value.players[0])
      handleCombat(discipline)
    }
    if (game.value.players[1].initiative && game.value.players[1].bot) {
      const discipline = Game.chooseDiscipline(game.value.players[1])
      handleCombat(discipline)
    }
  }
}

onMounted(async () => {
  if (route.path === '/local') {
    game.value = localGameStore.games['999']
    botTurn()
    watch(() => game.value.gameLog.length, (newVal) => {
      if (game.value.running) {
        game.value.players[0].initiative ? visible1.value = true : visible2.value = true
        setTimeout(botTurn
          , 1000)
      }
    })
  }
  else {
    const response = await db.records.getOne('games', route.params.id)
    localGameStore.games[route.params.id] = response.data
    game.value = localGameStore.games[route.params.id]
    console.log(game.value)
    try {
      db.realtime.subscribe(`games/${route.params.id}`, (event) => {
      // console.log(event.record.data)
        localGameStore.games[route.params.id] = event.record.data
        game.value = localGameStore.games[route.params.id]
      })
    }
    catch (e) {
      console.log(e)
    }
  }
})
</script>

<template>
  <div>
    <div v-if="game" flex flex-col justify-center>
      <div v-if="game.running" flex flex-col lg:flex-row items-center gap-13>
        <HeroCard :class="{ turned: !visible1, duellView: settingsStore.settings.duellView }" transition-transform :hero="game.players[0].deck[0]" @discipline="handleCombat" />
        <GameScore :game="game" @show-log="showLog = true" />
        <HeroCard :class="{ turned: !visible2 }" :hero="game.players[1].deck[0]" @discipline="handleCombat" />
      </div>
      <div v-else hc-font-style action-comics text-10 flex flex-col gap-6>
        <div>Game Over</div> <div text-8>
          {{ winner }} wins
        </div>
      </div>
      <div v-if="route.path === '/local'" flex justify-center my-10 gap-7>
        <button hc-font-style action-comics hover:scale text-5 @click="localGameStore.resetLocalGame">
          New Game
        </button>
        <button class="icon-btn mx-2 !outline-none" @click="settingsStore.toggleDuellView">
          <div text-7 i="carbon-arrows-vertical" lg:hidden />
        </button>
      </div>
      <GameLog v-if="showLog" :log="game.gameLog" @close="showLog = false" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<style scoped>
  .duellView {
    transform: rotate(180deg);
  }
</style>
