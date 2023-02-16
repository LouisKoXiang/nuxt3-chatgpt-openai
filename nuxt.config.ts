// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    // typeCheck: true
  },
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
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
