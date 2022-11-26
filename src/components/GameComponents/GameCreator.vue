<script setup>
import db from '~/database/db'
import { Game } from '~/heroclash/heroclash.js'

const cardsStore = useCardsStore()
const userStore = useUserStore()
const router = useRouter()
const users = ref()
const filter = ref('')
const opponent = ref({ id: '', name: '' })

const deckSize = ref(10)
function updateDeckSize(newValue) {
  deckSize.value = newValue
}

const filteredUsers = computed(() => {
  if (users.value)
    return users.value.filter(user => (user.id.includes(filter.value.toLowerCase()) || user.name.toLowerCase().includes(filter.value.toLowerCase())) && user.id !== userStore.user.profile.id)
  return []
})

onMounted(() => {
  db.records.getFullList('profiles', 200, {}).then((res) => {
    users.value = res
  })
})

async function createGame() {
  const game = new Game(cardsStore.cards, deckSize.value, 2, [{ name: userStore.user.profile.name, id: userStore.user.profile.id }, { name: opponent.value.name, id: opponent.value.id }])
  const record = await db.records.create('games', { data: game })
  const patchedGame = await db.records.update('games', record.id, { data: { ...game, id: record.id } })
  router.push(`/online/${patchedGame.id}`)
}
</script>

<template>
  <div flex flex-col gap-4 items-center>
    <SimpleSelector name="Deck Size" init-value="10" min="1" max="250" @update="updateDeckSize" />
    <div flex flex-col gap-2 items-center mb-4>
      <h1 hc-font-style action-comics text-7>
        Opponent
      </h1>
      <p>
        (choose by clicking)
      </p>
      <Transition>
        <div v-if="!opponent.id">
          <input v-model="filter" type="text" placeholder="filter by Name or ID">
          <TransitionGroup v-if="!opponent.id" tag="ul" name="fade" class="container">
            <div v-for="user in filteredUsers" :key="user.id" class="userList" :class="{ 'b-1': user.id === opponent.id }" my5 cursor-pointer p-2 rounded @click="opponent = user">
              <img :src="user.avatar ? user.avatar : `https://robohash.org/${user.id}?set=set4`" alt="" b-1 round h="3rem" pointer-events-none>
              <div pointer-events-none>
                {{ user.name }}
              </div>
              <div pointer-events-none>
                {{ user.id }}
              </div>
            </div>
          </TransitionGroup>
        </div>
      </Transition>
      <Transition>
        <div v-if="opponent.id" b-1 p-2 rounded cursor-pointer class="userList" @click="opponent = { id: '', name: '' }">
          <img :src="opponent.avatar ? opponent.avatar : `https://robohash.org/${opponent.id}?set=set4`" alt="" b-1 round h="3rem" pointer-events-none>
          <div pointer-events-none>
            {{ opponent.name }}
          </div>
          <div pointer-events-none>
            {{ opponent.id }}
          </div>
        </div>
      </Transition>
    </div>
    <button hc-font-style action-comics hover:scale text-7 @click="createGame">
      Start Game
    </button>
  </div>
</template>

<style scoped>
.userList{
    display: grid;
    grid-template-columns: minmax(3rem, 1fr) 1fr 1fr;
    place-items: center;
}
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
