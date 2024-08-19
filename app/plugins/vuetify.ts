// import 'vuetify/styles'
import {createVuetify, type ThemeDefinition} from 'vuetify'

const myCustomTheme: ThemeDefinition = {
  colors: {
    info: '0087A9',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme,
      },
    },
  })
  app.vueApp.use(vuetify)
})
