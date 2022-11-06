import { defineStore } from 'pinia'
import { ref } from 'vue'
import db from '~/database/db.js'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  async function logIn(mail, password) {
    const data = await db.users.authViaEmail(mail, password)
    user.value = data
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
  return { user, logIn, register }
},
{
  persist: true,
},
)
