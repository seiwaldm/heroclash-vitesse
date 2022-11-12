<script setup>
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const isUser = computed(() => userStore.user && userStore.user.profile.id === route.params.id)

function logOut() {
  userStore.user = null
  router.push('/')
}
</script>

<template>
  <div v-if="isUser">
    <div>Hello {{ userStore.user.profile.id }}!</div>
    <div>{{ route.params.id }}</div>
    <button button @click="logOut">
      Abmelden
    </button>
    <HeroCreator />
  </div>
  <div v-else>
    <LoadingSpinner w="100px" message="Loading..." />
  </div>
</template>
