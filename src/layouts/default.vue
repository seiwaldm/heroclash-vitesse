<template>
  <main class=" text-center text-gray-700 dark:text-gray-200" flex flex-col min-h="100vh" justify-center items-center gap-7>
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </main>
</template>

