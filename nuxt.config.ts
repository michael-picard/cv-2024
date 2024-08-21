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
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: 'scss/vuetify/settings.scss',
            }
          })
        )
      })
    },
    'nuxt-particles',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  content: {
    // documentDriven: true,
    highlight: {
      theme: 'github-dark',
      langs: [
        'php',
        'js',
      ]
    },
    markdown: {
      anchorLinks: false,
    },
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
    },
  },
  sitemap: {
    strictNuxtContentPaths: true
  },
  compatibilityDate: '2024-08-16'
})
