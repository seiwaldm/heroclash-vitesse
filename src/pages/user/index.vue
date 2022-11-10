<script setup>
const userStore = useUserStore()
</script>

<template>
  <div grid class="page">
    <UserLogin v-if="!userStore.user" />
    <div v-else>
      <div>Hello {{ userStore.user.email }}!</div>
      <button @click="userStore.logOut">
        Abmelden
      </button>
    </div>
  </div>
</template>

<style scoped>
.page{
  width: min-content;
}
</style>
