// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo'],
  runtimeConfig: {
    sitecoreToken: ''
  },
  apollo: {
    clients: {
      default: {
        authHeader: 'sc_apikey',
        authType: null,
        tokenName: 'sitecoreToken',
        httpEndpoint: 'https://sitecore-archi-advies-single.azurewebsites.net/sitecore/api/graph/edge'
      }
    }
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
      }
    }
  }
})
