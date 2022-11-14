<script setup>
import { routerKey } from 'vue-router'

const emits = defineEmits(['register'])

const userStore = useUserStore()
const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
const name = ref('')
const register = ref(false)
const redirectUrl = ref('https://heroclash.seiwald.club/auth')
// const redirectUrl = ref('http://localhost:3333/auth')

const inputType = ref('password')
function toggleInputType() {
  if (inputType.value === 'password')
    inputType.value = 'text'

  else
    inputType.value = 'password'
}

function providerUrl(providerName) {
  return userStore.providers.filter(provider => providerName === provider.name)[0].authUrl
}

function loginWithProvider(provider) {
  userStore.listAuthProviders().then(() => {
    userStore.providerName = provider
    window.location.href = providerUrl(provider) + redirectUrl.value
  })
}
</script>

<template>
  <form flex flex-col gap-3 items-start @submit.prevent="">
    <div flex gap-3 justify-between w="100%">
      <label for="email">E-Mail</label>
      <input id="email" v-model="email" b-1 w="20ch" type="email" name="email">
    </div>
    <div flex gap-3 justify-between w="100%" items-center relative>
      <label for="password">Passwort</label>
      <input id="password" v-model="password" w="20ch" b-1 :type="inputType" name="password">
      <button v-if="inputType === 'password'" i-carbon-view absolute right="0.5rem" @click="toggleInputType" />
      <button v-else i-carbon-view-off absolute right="0.5rem" @click="toggleInputType" />
    </div>
    <div v-if="register" flex gap-3 justify-between items-end w="100%">
      <label for="passwordRepeat" text-left>Passwort<br>wiederholen</label>
      <input id="passwordRepeat" v-model="passwordRepeat" w="20ch" b-1 :type="inputType" name="passwordRepeat">
    </div>

    <button v-if="!register" class="button" type="submit" self-end @click.prevent="userStore.logIn(email, password)">
      Anmelden
    </button>
    <div v-if="!register" flex justify-between w="100%">
      <p>Noch kein Konto?</p>
      <button class="button" @click.prevent="register = true">
        Registrieren
      </button>
    </div>
    <div v-if="register" flex flex-col w="100%">
      <button class="button" self-end @click.prevent="userStore.register(email, password, passwordRepeat)">
        Registrieren
      </button>
      <ul text-red my-3>
        <li v-if="password.length < 8">
          Passwort zu kurz!
        </li>
        <li v-if="password !== passwordRepeat">
          Passwörter stimmen nicht überein!
        </li>
      </ul>
    </div>
    <div v-if="!register" self-center>
      oder
    </div>
    <div v-if="!register" flex flex-col gap-3 items-center w="100%">
      <img src="/btn_google_signin_light_normal_web.png" h="40px" hover:cursor-pointer @click.prevent="loginWithProvider('google')">

      <button class="button github" flex justify-between items-center h="35px" w="160px" color="#757575" @click.prevent="loginWithProvider('github')">
        <div i-carbon-logo-github inline text-4 text-black />Sign in with GitHub
      </button>
    </div>
    <p mt-5 text-3>
      Vergiss nicht, einen Blick auf die <RouterLink to="/about" underline>
        Nutzungsbedingungen und Datenschutzerklärung
      </RouterLink> zu werfen!
    </p>
  </form>
</template>

<style scoped>
.github{
  font-size: 12.5px;
  font-family: roboto-medium;
  border-radius: 2px;
  border-width: 0px;
  /* box-shadow: 0 1px rgba(0, 0, 0, 0.2); */
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
  background-color: #fff;
}
</style>
