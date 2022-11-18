<script setup>
const userStore = useUserStore()
const router = useRouter()

function logOut() {
  userStore.user = null
  router.push('/')
}

const editName = ref(false)
const newName = ref('')
function updateUserName() {
  userStore.updateUserName(newName.value).then(() => {
    editName.value = false
  })
}
</script>

<template>
  <div grid class="profile" gap-4 items-center>
    <div class="profilePic" b-1 overflow-hidden>
      <img :src="userStore.user.profile.avatar ? userStore.user.profile.avatar : `https://robohash.org/${userStore.user.profile.id}?set=set4`" alt="Profile Pic">
    </div>
    <div flex flex-col items-start gap-2>
      <div text-5 font-bold flex gap-2 items-center flex-wrap>
        Name: <div v-if="!editName">
          {{ userStore.user.profile.name }}
        </div>
        <div v-if="!editName" i-carbon-edit cursor-pointer @click="editName = true" /> <input v-if="editName" v-model="newName" p-1 w="15ch" type="text">
        <div v-if="editName" cursor-pointer i-carbon-edit-off @click="updateUserName" />
      </div>

      <div>Profile-ID: {{ userStore.user.profile.id }}</div>

      <div mt-5>
        <button button @click="logOut">
          Abmelden
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profilePic {
    max-width: 150px;
    min-width: 100px;
    aspect-ratio: 1;
    border-radius: 50%;
}

.profile {
    grid-template-columns: auto minmax(0, 1fr);
    max-width: 90vw;
}
</style>
