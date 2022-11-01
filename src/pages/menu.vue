<script setup>
const router = useRouter()
</script>

<template>
  <nav flex flex-col justify-evenly gap-15>
    <RouterLink to="/gallery">
      <div hc-font-style hover:scale inline-block action-comics text-7>
        Gallery
      </div>
    </RouterLink>
    <RouterLink to="/local">
      <div hc-font-style hover:scale inline-block action-comics text-7>
        Local Game
      </div>
    </RouterLink>
    <RouterLink to="/online">
      <div hc-font-style hover:scale inline-block action-comics text-7>
        Online Mode
      </div>
    </RouterLink>
  </nav>
</template>
