import JsonViewer from 'vue-json-viewer'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(JsonViewer)
})
