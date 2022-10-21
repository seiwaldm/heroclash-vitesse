<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()

const hero = {
  appearance: {
    eyeColor: 'Blue',
    gender: 'male',
    hairColor: 'Brown',
    height: [
      '5\'7',
      '170 cm',
    ],
    race: 'human',
    weight: [
      '143 lb',
      '65 kg',
    ],
  },
  biography: {
    aliases: [
      'Prof. Seiwald',
      'Papi',
      'Doc',
    ],
    alignment: 'good',
    alterEgos: 'No alter egos found.',
    firstAppearance: 'Class of 02',
    fullName: 'Markus Seiwald',
    placeOfBirth: 'Black Creek',
    publisher: 'Seiwald & Gruber Inc.',
  },
  connections: {
    affiliation: 'johak',
    relatives: [
      'Asche (Spouse)',
      'Pauli (Son)',
      'Lina (Daughter)',
    ],
  },
  created_at: '2021-05-27T19:58:22.761Z',
  id: 800,
  images: {
    md: 'images/md/800-theprof.jpg',
  },
  name: 'The Prof',
  powerstats: {
    combat: 29,
    durability: 51,
    intelligence: 93,
    power: 68,
    speed: 67,
    strength: 25,
  },
  published_at: '2021-05-27T19:58:44.941Z',
  slug: '800-theprof',
  updated_at: '2021-05-27T20:42:29.060Z',
  work: {
    base: 'Salzburg City, Austria',
    occupation: 'Teacher',
  },
}
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

    <SimpleSelector name="Heroes" />

    <HeroCard :hero="hero" my-4 />

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
