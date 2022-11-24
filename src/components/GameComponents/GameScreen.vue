<script setup>
import { Game } from '~/heroclash/heroclash.js'
import db from '~/database/db.js'

const props = defineProps(['mode'])
const bgColor = computed(() => isDark.value ? '#121212' : '#ffffff')
const visible1 = ref(false)
const visible2 = ref(false)
const showLog = ref(false)
const route = useRoute()

const settingsStore = useSettingsStore()

const localGameStore = useLocalGameStore()

const game = ref(null)
const winner = computed(() => game.value.players[0].deck.length > 0 ? game.value.players[0].name : game.value.players[1].name)

function handleCombat(discipline) {
  game.value.currentDiscipline = discipline
  visible1.value = true
  visible2.value = true
  setTimeout(() => {
    Game.handleCombat(discipline, game.value)
    visible1.value = false
    visible2.value = false
  }, 2000)
}

function botTurn() {
  if (game.value) {
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
  if (props.mode === 'local') {
    game.value = localGameStore.localGame
    botTurn()
    watch(() => game.value.players[0].deck.length, (newVal) => {
      if (game.value.running) {
        setTimeout(botTurn
          , 1000)
      }
    })
  }
  else {
    const response = await db.records.getOne('games', route.params.id)
    game.value = response.data
    console.log(game.value.players)
    // db.realtime.subscribe(`games/${route.params.id}`, event => console.log(event))
  }
})
</script>

<template>
  <div>
    <div v-if="game" flex flex-col justify-center>
      <div v-if="game.running" flex flex-col lg:flex-row items-center gap-13>
        <HeroCard :class="{ turned: !visible1 && !game.players[0].initiative, duellView: settingsStore.settings.duellView }" transition-transform :hero="game.players[0].deck[0]" @discipline="handleCombat" />
        <GameScore :mode="props.mode" @show-log="showLog = true" />
        <HeroCard :class="{ turned: !visible2 && !game.players[1].initiative }" :hero="game.players[1].deck[0]" @discipline="handleCombat" />
      </div>
      <div v-else hc-font-style action-comics text-10 flex flex-col gap-6>
        <div>Game Over</div> <div text-8>
          {{ winner }} wins
        </div>
      </div>
      <div v-if="mode === 'local'" flex justify-center my-10 gap-7>
        <button hc-font-style action-comics hover:scale text-5 @click="localGameStore.resetGame">
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
