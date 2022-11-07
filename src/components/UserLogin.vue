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

const inputType = ref('password')
const icon = ref('carbon-view')
function toggleInputType() {
  if (inputType.value === 'password') {
    inputType.value = 'text'
    icon.value = 'carbon-view-off'
  }
  else {
    inputType.value = 'password'
    icon.value = 'carbon-view'
  }
}

async function loginWithProvider(provider) {
  userStore.providerName = provider
  await userStore.listAuthProviders()
}
</script>

<template>
  <form flex flex-col gap-3 items-start @submit.prevent="">
    <div flex gap-3 justify-between w="100%">
      <label for="email">E-Mail</label>
      <input id="email" v-model="email" b-1 type="email" name="email">
    </div>
    <div flex gap-3 justify-between w="100%" items-center relative>
      <label for="password">Passwort</label>
      <input id="password" v-model="password" b-1 :type="inputType" name="password">
      <button i-carbon-view absolute right="0.5rem" @click="toggleInputType" />
    </div>
    <div v-if="register" flex gap-3 justify-between items-end w="100%">
      <label for="passwordRepeat" text-left>Passwort<br>wiederholen</label>
      <input id="passwordRepeat" v-model="passwordRepeat" b-1 :type="inputType" name="passwordRepeat">
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
      <button self-end @click.prevent="userStore.register(email, password, passwordRepeat)">
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
    <a v-if="!register" class="button" :href="userStore.providers[0].authUrl + redirectUrl" self-stretch flex justify-center items-center gap-3 @click="loginWithProvider('google')">
      Anmelden mit Google <div i-ant-design-google-outlined inline text-6 />
    </a>
    <a v-if="!register" class="button" self-stretch flex justify-center items-center gap-3>
      Anmelden mit GitHub <div i-carbon-logo-github inline text-6 />
    </a>
  </form>

  <!-- <button>Log In with Google</button>
  <button>Log In with GitHub</button> -->
</template>

<style scoped>
.button {
    border-width: 1px;
    padding: 0.25rem 0.5rem;
}
</style>
