import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appUrl: 'https://michael-picard.dev',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  devtools: {enabled: true},
  site: {
    url: 'https://michael-picard.dev',
    name: 'Michael Picard',
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
    'nuxt-schema-org',
    'nuxt-delay-hydration',
  ],
  content: {
    // documentDriven: true,
    highlight: {
      theme: 'github-dark',
      langs: [
        'php',
        'js',
        'css',
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
  compatibilityDate: '2024-08-16',
  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Michael Picard',
    }
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    // debug: process.env.NODE_ENV === 'development',
    mode: 'init',
  }
})
