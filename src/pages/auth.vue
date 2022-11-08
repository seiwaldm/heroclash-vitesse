<script setup>
import { routerKey } from 'vue-router'
import db from '~/database/db.js'
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const redirectUrl = ref('https://heroclash.seiwald.club/auth')
// const redirectUrl = ref('http://localhost:3333/auth')

function loginWithProvider() {
  const provider = userStore.providers.filter(provider => provider.name === userStore.providerName)[0]

  if (provider.state !== route.query.state)
    throw new Error('State parameters don\'t match.')

  db.users.authViaOAuth2(userStore.providerName, route.query.code, provider.codeVerifier, redirectUrl.value)
    .then((authData) => { userStore.user = authData.user })
    .then(() => router.push('/user')).catch(err => console.log(err))
}

onMounted(() => {
  loginWithProvider()
})
</script>

<template>
  <div w="100vw" h="100vh" z="1" fixed grid place-items-center bg-light dark:bg-dark>
    <LoadingSpinner w="100px" message="Loading..." />
  </div>
</template>
