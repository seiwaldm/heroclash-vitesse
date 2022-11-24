<script setup>
const userStore = useUserStore()
const cardStore = useCardsStore()
const route = useRoute()
const router = useRouter()
const danger = ref(false)
const sayonara = ref('')

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

function deleteUser() {
  if (sayonara.value === 'sayonara') {
    userStore.deleteUser()
    userStore.logOut()
    router.push('/')
  }
}
</script>

<template>
  <div v-if="isUser" flex flex-col items-center gap-10>
    <UserProfile />
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
        id: `${Date.now()}`,
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
          species: '',
        },
      }" @cancel="toggleEdit"
    />
    <div v-if="!danger" button text-red b-red @click="danger = true">
      Konto löschen
    </div>
    <div v-if="danger" flex flex-col items-start gap-2 text-left b-1 p-3 rounded b-red>
      <p>Willst du dein Konto wirklich löschen? <br>Gib "sayonara" in das Textfeld ein:</p>
      <input v-model="sayonara" type="text" b-red>
      <div flex gap-2>
        <button button b-red text-red @click="deleteUser">
          Konto löschen
        </button>
        <button button @click="danger = false">
          Abbrechen
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <LoadingSpinner w="100px" message="Loading..." />
  </div>
</template>
