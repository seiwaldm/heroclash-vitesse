<script setup>
const props = defineProps(['mode'])
const bgColor = computed(() => isDark.value ? '#121212' : '#ffffff')
const visible1 = ref(false)
const visible2 = ref(false)

const settingsStore = useSettingsStore()

const localGameStore = useLocalGameStore()
const winner = computed(() => localGameStore.localGame.players[0].deck.length > 0 ? localGameStore.localGame.players[0].name : localGameStore.localGame.players[1].name)

function handleCombat(discipline) {
  localGameStore.localGame.currentDiscipline = discipline
  visible1.value = true
  visible2.value = true
  setTimeout(() => {
    localGameStore.handleCombat(discipline)
    visible1.value = false
    visible2.value = false
  }, 2000)
}

function botTurn() {
  if (localGameStore.localGame.players[0].initiative && localGameStore.localGame.players[0].bot) {
    const discipline = localGameStore.chooseDiscipline(localGameStore.localGame.players[0])
    handleCombat(discipline)
  }
  if (localGameStore.localGame.players[1].initiative && localGameStore.localGame.players[1].bot) {
    const discipline = localGameStore.chooseDiscipline(localGameStore.localGame.players[1])
    handleCombat(discipline)
  }
}

watch(() => localGameStore.localGame.players[0].deck.length, (newVal) => {
  if (localGameStore.localGame.running) {
    setTimeout(botTurn
      , 1000)
  }
})

onMounted(botTurn)
</script>

<template>
  <div flex flex-col justify-center>
    <div v-if="localGameStore.localGame.running" flex flex-col lg:flex-row items-center gap-13>
      <HeroCard :class="{ turned: !visible1 && !localGameStore.localGame.players[0].initiative, duellView: settingsStore.settings.duellView }" transition-transform :hero="localGameStore.localGame.players[0].deck[0]" @discipline="handleCombat" />
      <GameScore :mode="props.mode" />
      <HeroCard :class="{ turned: !visible2 && !localGameStore.localGame.players[1].initiative }" :hero="localGameStore.localGame.players[1].deck[0]" @discipline="handleCombat" />
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
  </div>
</template>

<style scoped>
  .duellView {
    transform: rotate(180deg);
  }
</style>
