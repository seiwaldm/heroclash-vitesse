import { defineStore } from 'pinia'
import { ref } from 'vue'
import db from '~/database/db.js'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const providers = ref([])
  const providerName = ref([])

  async function logIn(mail, password) {
    const data = await db.users.authViaEmail(mail, password)
    user.value = data.user
  }

  async function register(mail, password, passwordRepeat) {
    try {
      const data = await db.users.create({
        email: mail,
        password,
        passwordConfirm: passwordRepeat,
      })
      user.value = data
      await db.users.requestVerification(mail)
    }
    catch (error) {
      console.log(error)
    }
  }

  async function logOut() {
    db.authStore.clear()
    user.value = null
  }

  async function listAuthProviders() {
    const data = await db.users.listAuthMethods()
    providers.value = data.authProviders
  }

  async function updateUserName(name) {
    const data = await db.records.update('profiles', user.value.profile.id, { name })
    user.value = await db.users.getOne(user.value.id)
  }

  return { user, logIn, register, logOut, providers, listAuthProviders, providerName, updateUserName }
},
{
  persist: true,
},
)
