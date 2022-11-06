<script setup>
const userStore = useUserStore()
</script>

<template>
  <div>
    <UserLogin v-if="!userStore.user" />
    <div v-else>
      Hello {{ userStore.user.user.email }}!
    </div>
  </div>
</template>
