import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref({
    duellView: false,
  })

  function toggleDuellView() {
    settings.value.duellView = !settings.value.duellView
  }

  return { settings, toggleDuellView }
})
