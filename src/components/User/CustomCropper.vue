<script setup>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import db from '~/database/db'

const userStore = useUserStore()

const img = ref('')

const coordinates = ref({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
})

const croppedImage = ref(null)

function change({ coords, canvas }) {
  coordinates.value = coords
  canvas.toBlob((blob) => {
    croppedImage.value = blob
  })
}

function loadFile(e) {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    img.value = reader.result
  }
}

async function uploadImage() {
  const formData = new FormData()
  formData.append('heroImage', croppedImage.value)
  formData.append('creator', userStore.user.profile.id)
  // upload to server
  const response = await db.records.create('heroImages', formData)
}
</script>

<template>
  <div flex flex-col gap-3>
    <h2>Hero-Image</h2>
    <input type="file" accept=".jpg,.jpeg,.png,.webp" @change="loadFile">
    <Cropper
      class="cropper"
      :src="img"
      :auto-zoom="true"
      :stencil-size="{ width: 320, height: 480 }"
      :canvas="{ width: 320, height: 480 }"
      image-restriction="stencil"
      @change="change"
    />
    <button button @click="uploadImage">
      Upload
    </button>
  </div>
</template>
