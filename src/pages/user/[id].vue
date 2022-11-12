<script setup>
const userStore = useUserStore()
const cardStore = useCardsStore()
const route = useRoute()
const router = useRouter()

const isUser = computed(() => userStore.user && userStore.user.profile.id === route.params.id)
const currentHero = computed(() => {
  const array = cardStore.cards.filter(card => card.creator === route.params.id)
  if (array.length > 0)
    return array[0].data
  return null
})
const editHero = ref(false)

function toggleEdit() {
  editHero.value = !editHero.value
}

function logOut() {
  userStore.user = null
  router.push('/')
}
</script>

<template>
  <div v-if="isUser" flex flex-col items-center gap-3>
    <div>
      <div>Hello {{ userStore.user.profile.id }}!</div>
      <div>{{ route.params.id }}</div>
      <button button @click="logOut">
        Abmelden
      </button>
    </div>

    <div v-if="currentHero && !editHero" flex flex-col gap-5 items-center>
      <h1 text-5 font-bold>
        Das ist dein Hero
      </h1>
      <HeroCard :hero="currentHero" />
      <button button @click="toggleEdit">
        Bearbeiten
      </button>
    </div>
    <HeroCreator
      v-if="editHero || !currentHero" :hero="currentHero ? currentHero : {
        name: '',
        id: `${cardStore.cards[lenth - 1].data.id + 1}`,
        powerstats: {
          combat: 0,
          durability: 0,
          intelligence: 0,
          power: 0,
          speed: 0,
          strength: 0,

        },
        images: {
          md: '/images/md/no-portrait.jpg',
        },
        biography: {
          aliases: '',
          alignment: '',
          alterEgos: '',
          firstAppearance: '',
          fullName: '',
          placeOfBirth: '',
          publisher: '',
        },
        connections: {
          groupAffiliation: '',
          relatives: '',
        },
        work: {
          base: '',
          occupation: '',
        },
        appearance: {
          eyeColor: '',
          gender: '',
          hairColor: '',
          height: '',
          weight: '',
          race: '',
        },
      }" @cancel="toggleEdit"
    />
  </div>
  <div v-else>
    <LoadingSpinner w="100px" message="Loading..." />
  </div>
</template>
