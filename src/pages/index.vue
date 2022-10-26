<script setup>
const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/menu')
  }, 4000)
})
</script>

<template>
  <JohakAnimation />
</template>

<route lang="yaml">
meta:
  layout: home
  </route>
