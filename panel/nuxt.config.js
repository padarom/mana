const pkg = require('../package')
const { resolve } = require('path')

console.warn(resolve(__dirname, 'client/'));

module.exports = {
  mode: 'universal',

  srcDir: resolve(__dirname, 'client/'),

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '@/assets/stylus/main.styl'
  ],

  plugins: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  router: {
    middleware: ['auth']
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  build: {
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
