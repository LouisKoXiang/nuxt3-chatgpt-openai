// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'Nuxt3-OpenAI',
      meta: [
        { name: 'description', content: 'Nuxt3 Integrating with OpenAI' }
      ]
    }
  },
  typescript: {
    // typeCheck: true
    shim: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image-edge',
    'nuxt-icon',
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
  },
  css: [
    '@vueform/multiselect/themes/default.css'
  ]
})
