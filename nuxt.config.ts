import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: {enabled: true},
  site: {
    url: 'https://michael-picard.dev',
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({autoImport: true}))
      })
    },
    'nuxt-particles',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark',
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"],
      // routes: ["/", "/blog"],
    },
  },
  sitemap: {
    strictNuxtContentPaths: true
  },
  compatibilityDate: '2024-08-16'
})
