<script setup>
const props = defineProps(['hero'])
const emits = defineEmits(['discipline'])
const showBiography = ref(false)

const settingsStore = useSettingsStore()

function discipline(name) {
  emits('discipline', name)
}
</script>

<template>
  <Transition>
    <div>
      <div class="herocard" w="340px" border="1 gray-200 rounded-2">
        <div class="flip-card-inner">
          <div class="flip-card-front" overflow-hidden rounded-2>
            <HeroImage :image-url="hero.images.md" :hero-id="hero.id" @show-biography="showBiography = true" />
            <HeroStats :name="hero.name" :stats="hero.powerstats" :alignment="hero.biography.alignment" @discipline="discipline" />
          </div>
          <div class="flip-card-back" overflow-hidden rounded-2 />
        </div>
      </div>
      <HeroModal v-if="showBiography && !settingsStore.settings.duellView" :hero="hero" @close="showBiography = false" />
    </div>
  </Transition>
</template>

<style scoped>
.herocard{
    perspective: 1000px;
    width: 340px;
    height: 240px;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.turned .flip-card-inner {
  transform: rotateY(180deg);
  /* transition: transform 0s; */
}
.flip-card-front {
  display: grid;
  grid-template-columns: 160px 180px;
}
.flip-card-back {
  background-image: url("/card-red.png");
  background-size: contain;
  transform: rotateY(180deg);
}
</style>
