// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true
  },
  // ssr options: "ssr: true or false"
  ssr: false, 
  // for generate ".nojekyll" file. Github pages is basically based on jekyll.
  nitro : { 
    preset : 'github-pages' 
  },
  // own repository name.
  app: {
    baseURL: '/blog/',
    buildAssetsDir: 'assets'
  },
  // add below after install vuetify.
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})
