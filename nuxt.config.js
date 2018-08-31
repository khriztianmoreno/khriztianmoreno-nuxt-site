const bodyParser = require('body-parser')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'khriztianmoreno | FullStack Javascript Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I am a community leader and altruistic speaker, JavaScript/Node.js evangelist and Fullstack Javascript Developer.' },
      { hid: 'keywords', name: 'keywords', content: 'Developer, Javascript Developer, Freelance, Colombia, Medellin, VueJS, ReactJS, NodeJS, ExpressJS, Frontend developer, web developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' }
    ],
    script: [
      { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', type: 'text/javascript' }
    ]
  },

  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

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
  }
}
