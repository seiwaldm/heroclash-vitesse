<!-- eslint-disable no-console -->
<script setup lang="ts">
import db from '~/database/db.js'
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()

const hero = ref({
  appearance: {
    eyeColor: 'Yellow',
    gender: 'Male',
    hairColor: 'No Hair',
    height: [
      '6\'8',
      '203 cm',
    ],
    race: 'Human',
    weight: [
      '980 lb',
      '441 kg',
    ],
  },
  biography: {
    aliases: [
      'Rick Jones',
    ],
    alignment: 'good',
    alterEgos: 'No alter egos found.',
    firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
    fullName: 'Richard Milhouse Jones',
    placeOfBirth: 'Scarsdale, Arizona',
    publisher: 'Marvel Comics',
  },
  connections: {
    groupAffiliation: 'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
    relatives: 'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)',
  },
  id: 1,
  images: {
    lg: 'images/lg/1-a-bomb.jpg',
    md: 'images/md/1-a-bomb.jpg',
    sm: 'images/sm/1-a-bomb.jpg',
    xs: 'images/xs/1-a-bomb.jpg',
  },
  name: 'A-Bomb',
  powerstats: {
    combat: 64,
    durability: 80,
    intelligence: 38,
    power: 24,
    speed: 17,
    strength: 100,
  },
  slug: '1-a-bomb',
  work: {
    base: '-',
    occupation: 'Musician, adventurer, author; formerly talk show host',
  },
})

const heroList = ref([])
function updateHero(counter: any) {
  console.log(counter)
  hero.value = heroList.value[counter - 1].data
}

const getHeroList = async () => {
  // const response = await fetch('https://hcpb.seiwald.club/api/collections/heroes/records?perPage=700')
  // const data = await response.json()
  const data = await db.records.getFullList('heroes', 200 /* batch size */, {
    sort: 'created',
  })
  heroList.value = data
}

onMounted(() => {
  getHeroList()
  console.log(db)
})
</script>

<template>
  <div flex flex-col items-center>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />
    <div v-if="heroList" flex flex-col items-center>
      <SimpleSelector name="Heroes" min="1" :max="heroList ? heroList.length : 1" @update="updateHero" />

      <HeroCard :hero="hero" my-4 />
    </div>
    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        btn m-3 text-sm
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
