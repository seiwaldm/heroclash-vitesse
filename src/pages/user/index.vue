<script setup>
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const router = useRouter()

const { user } = storeToRefs(userStore)

if (userStore.user)
  router.push(`/user/${userStore.user.id}`)

watch(user, () => {
  if (userStore.user)
    router.push(`/user/${userStore.user.id}`)
})
</script>

<template>
  <div grid class="page">
    <UserLogin v-if="!userStore.user" />
  </div>
</template>

<style scoped>
.page{
  width: min-content;
}
</style>
