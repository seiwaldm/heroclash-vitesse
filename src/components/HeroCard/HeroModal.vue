<script setup>
const props = defineProps(['hero'])
const emits = defineEmits(['close'])
</script>

<template>
  <div class="modal" w="100vw" min-h="100vh" z="1" text-left absolute top-0 left-0 @click="emits('close')">
    <div rounded overflow-hidden class="modal-content">
      <div text-6 p-2 text-white font-bold :class="hero.biography.alignment">
        {{ hero.name }}
      </div>
      <div text-4 text-black p-2>
        <ul>
          <li v-for="(value, key) in hero.biography" :key="key" flex gap-3>
            <span>{{ key }}:</span><span>{{ value }}</span>
          </li>
          <br>
          <li v-for="(value, key) in hero.appearance" :key="key" flex gap-3>
            <span>{{ key }}:</span><span>{{ value }}</span>
          </li>
          <br>
          <li v-for="(value, key) in hero.work" :key="key" flex gap-3>
            <span>{{ key }}:</span><span>{{ value }}</span>
          </li>
          <br>
          <li v-for="(value, key) in hero.connections" :key="key" flex gap-3>
            <span>{{ key }}:</span><span>{{ value }}</span>
          </li>
        </ul>
      </div>
      <div text-5 p-2 text-white :class="hero.biography.alignment">
        Alignment: {{ hero.biography.alignment }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
    background-color: rgba(18,18,18,0.5);
}
.modal li {
  list-style-type: none;
}

/* Modal Content */
.modal-content {
  position: relative;
  top: 50px;
  background-color: #fefefe;
  margin: auto;
  width: clamp(300px, 80%, 800px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 50px;
    opacity: 1;
  }
}
</style>
