// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo'],
  runtimeConfig: {
    githubToken: ''
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
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
