<script>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
export default {
  name: 'ImageCropper',
  components: {
    Cropper,
  },
  props: {},
  data() {
    return {
      image:
            'https://images.pexels.com/photos/4218687/pexels-photo-4218687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
  },
  methods: {
    cropImage() {
      const result = this.$refs.cropper.getResult()
      const newTab = window.open()
      // for testing open the result in a new tab
      newTab.document.body.innerHTML = `<img src="${result.canvas.toDataURL(
            'image/jpeg',
          )}"></img>`
    },
  },
}
</script>

<template>
  <v-card width="auto">
    <div class="example">
      <Cropper ref="cropper" class="example-cropper" :src="image" />
      <drop-zone
        v-model="image"
        :label="upload"
        :location="location"
        class="pb-15"
        @uploaded="newImagesUploaded"
      />
      <div class="button-wrapper">
        <span class="button" @click="cropImage">Crop image</span>
      </div>
    </div>
  </v-card>
</template>

    <style scoped>
    .example-cropper {
      border: solid 1px #eee;
      min-height: 300px;
      width: 100%;
      height: 85vh;
    }

    .button-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 17px;
    }

    .button {
      color: white;
      font-size: 16px;
      padding: 10px 20px;
      background: #35b392;
      cursor: pointer;
      transition: background 0.5s;
      font-family: Open Sans, Arial;
      margin: 0 10px;
    }

    .button:hover {
      background: #38d890;
    }

    .button input {
      display: none;
    }
    </style>
