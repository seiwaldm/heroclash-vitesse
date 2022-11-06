<script setup>
const userStore = useUserStore()
</script>

<template>
  <div>
    <UserLogin v-if="!userStore.user" />
    <div v-else>
      <div>Hello {{ userStore.user.user.email }}!</div>
      <button @click="userStore.logOut">
        Abmelden
      </button>
    </div>
  </div>
</template>
