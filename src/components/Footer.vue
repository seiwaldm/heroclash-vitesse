<template>
  <nav flex justify-center w="100%" text-7 my-6 mx-0>
    <RouterLink class="icon-btn mx-2" to="/menu">
      <div i-carbon-campsite />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <RouterLink class="icon-btn mx-2" to="/about">
      <div i-carbon-dicom-overlay />
    </RouterLink>
  </nav>
</template>

