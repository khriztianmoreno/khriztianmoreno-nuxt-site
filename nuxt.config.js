const axios = require('axios')
const bodyParser = require('body-parser')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'khriztianmoreno | FullStack Javascritp Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', type: 'text/javascript' }
    ]
  },

  modules: [
    '@nuxtjs/font-awesome'
  ],
  router: {
    linkActiveClass: 'active'
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // Api middleware
    '~/api'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function () {
      return axios.get('api/medium')
        .then((res) => {
          const { data } = res
          const posts = data.payload.references.Post
          return {
            route: '/blog',
            payload: posts
          }
        })
    }
  }
}
