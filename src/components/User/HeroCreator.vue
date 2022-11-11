<script setup>
const imageLoader = ref(false)
function toggleImageLoader() {
  imageLoader.value = !imageLoader.value
}

const basePoints = 333
const combat = ref(0)
const durability = ref(0)
const intelligence = ref(0)
const power = ref(0)
const speed = ref(0)
const strength = ref(0)
const remainingPoints = computed(() => {
  return basePoints - combat.value - durability.value - intelligence.value - power.value - speed.value - strength.value
})
</script>

<template>
  <div flex flex-col items-start gap-5>
    <h1>Your Hero</h1>
    <div flex justify-between gap-3>
      <label for="heroName">Name des Helden</label><input id="heroName" type="text">
    </div>
    <fieldset b="1" w="100%" px-3 flex flex-col justify-between>
      <legend>
        Powerstats, remaining points: {{ remainingPoints }}
      </legend>
      <div flex justify-between gap-3>
        <label for="combat">Combat</label><input id="combat" v-model="combat" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="durability">Durability</label><input id="durability" v-model="durability" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="intelligence">Intelligence</label><input id="intelligence" v-model="intelligence" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="power">Power</label><input id="power" v-model="power" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="speed">Speed</label><input id="speed" v-model="speed" type="number" min="1" max="100">
      </div>
      <div flex justify-between gap-3>
        <label for="strength">Strength</label><input id="strength" v-model="strength" type="number" min="1" max="100">
      </div>
    </fieldset>
    <CustomCropper max-w="90vw" />
  </div>
</template>
