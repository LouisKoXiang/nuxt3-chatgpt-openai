// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    // typeCheck: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore']
        ]
      }
    ]
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ''
  }
})
