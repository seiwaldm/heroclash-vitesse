<script setup>
const props = defineProps(['hero'])
const imageLoader = ref(false)
function toggleImageLoader() {
  imageLoader.value = !imageLoader.value
}

const basePoints = 333

const newHero = ref({
  name: '',
  id: '999',
  powerstats: {
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,

  },
  images: {
    md: 'images/md/no-portrait.jpg',
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
})

const remainingPoints = computed(() => {
  return basePoints - newHero.value.powerstats.combat - newHero.value.powerstats.durability - newHero.value.powerstats.intelligence - newHero.value.powerstats.power - newHero.value.powerstats.speed - newHero.value.powerstats.strength
})

function updateImage(image) {
  newHero.value.images.md = image
}
</script>

<template>
  <div flex flex-col items-start gap-5 max-w="80vw">
    <h1>Neuen Hero erstellen</h1>
    <HeroCard :hero="newHero" self-center />
    <div flex justify-between gap-3>
      <label for="heroName">Name des Helden</label><input id="heroName" v-model="newHero.name" type="text">
    </div>
    <fieldset b="1" w="100%" p-3 flex flex-col justify-between gap-1>
      <legend>
        Powerstats, remaining points: {{ remainingPoints }}
      </legend>
      <div flex justify-between gap-3>
        <label for="combat">Combat</label><input id="combat" v-model="newHero.powerstats.combat" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="durability">Durability</label><input id="durability" v-model="newHero.powerstats.durability" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="intelligence">Intelligence</label><input id="intelligence" v-model="newHero.powerstats.intelligence" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="power">Power</label><input id="power" v-model="newHero.powerstats.power" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="speed">Speed</label><input id="speed" v-model="newHero.powerstats.speed" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="strength">Strength</label><input id="strength" v-model="newHero.powerstats.strength" type="number" min="1" max="100">
      </div>
    </fieldset>
    <HeroImageCropper max-w="800px" self-center @update-image="updateImage" />
    <fieldset b="1" w="100%" p-3 flex flex-col justify-between gap-1>
      <legend>
        Appearance
      </legend>
      <div flex justify-between gap-3>
        <label for="eyeColor">Eye Color</label><input id="eyeColor" v-model="newHero.appearance.eyeColor" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="gender">Gender</label><input id="gender" v-model="newHero.appearance.gender" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="hairColor">Hair Color</label><input id="hairColor" v-model="newHero.appearance.hairColor" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="height">Height (foot/cm)</label><input id="height" v-model="newHero.appearance.height" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="weight">Weight (lbs/kg)</label><input id="weight" v-model="newHero.appearance.weight" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="race">Race</label><input id="race" v-model="newHero.appearance.race" type="text">
      </div>
    </fieldset>
    <fieldset b="1" w="100%" p-3 flex flex-col justify-between gap-1>
      <legend>
        Biography
      </legend>
      <div flex justify-between gap-3>
        <label for="aliases">Aliases</label><input id="aliases" v-model="newHero.biography.aliases" type="text" placeholder="Werte mit , trennen">
      </div>
      <div flex justify-between gap-3>
        <label for="alignment">Alignment</label>
        <select v-model="newHero.biography.alignment" b-1>
          <option>good</option>
          <option>bad</option>
          <option>neutral</option>
        </select>
      </div>
      <div flex justify-between gap-3>
        <label for="alterEgos">Alter Egos</label><input id="alterEgos" v-model="newHero.biography.alterEgos" type="text" placeholder="Werte mit , trennen">
      </div>
      <div flex justify-between gap-3>
        <label for="firstAppearance">First Appearance</label><input id="firstAppearance" v-model="newHero.biography.firstAppearance" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="fullName">Full Name</label><input id="fullName" v-model="newHero.biography.fullName" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="placeOfBirth">Place of Birth</label><input id="placeOfBirth" v-model="newHero.biography.placeOfBirth" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="publisher">Publisher</label><input id="publisher" v-model="newHero.biography.publisher" type="text">
      </div>
    </fieldset>
    <fieldset b="1" w="100%" p-3 flex flex-col justify-between gap-1>
      <legend>
        Connections
      </legend>
      <div flex justify-between gap-3>
        <label for="affiliaton">Group Affiliation</label><input id="affiliation" v-model="newHero.connections.groupAffiliation" type="text" placeholder="Werte mit , trennen">
      </div>
      <div flex justify-between gap-3>
        <label for="relatives">Relatives</label><input id="relatives" v-model="newHero.connections.relatives" type="text" placeholder="Werte mit , trennen">
      </div>
    </fieldset>
    <fieldset b="1" w="100%" p-3 flex flex-col justify-between gap-1>
      <legend>
        Work
      </legend>
      <div flex justify-between gap-3>
        <label for="base">Base</label><input id="base" v-model="newHero.work.base" type="text">
      </div>
      <div flex justify-between gap-3>
        <label for="occupation">Occupation</label><input id="occupation" v-model="newHero.work.occupation" type="text" placeholder="Werte mit , trennen">
      </div>
    </fieldset>
  </div>
</template>
