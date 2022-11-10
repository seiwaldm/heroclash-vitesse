<script setup>
const userStore = useUserStore()
const router = useRouter()

if (userStore.user)
  router.push(`/user/${userStore.user.id}`)
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
