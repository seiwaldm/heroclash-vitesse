<template>
  <main flex flex-col justify-center items-center h="100vh" bg-white class="fadeOut">
    <RouterView />
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </main>
</template>

<style scoped>
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.fadeOut{
  animation: fadeOut 1s;
  animation-fill-mode: forwards;
  animation-delay: 3s;
}
</style>
