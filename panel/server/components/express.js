const app = require('express')()
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const session = require('express-session')
const { port } = require('../utils/config')

app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

app.use(bodyParser.json())
app.use('/api', require('../api/index'))

const nuxtConfig = require('../../nuxt.config.js')
nuxtConfig.dev = (process.env.NODE_ENV === 'dev')

const nuxt = new Nuxt(nuxtConfig)
app.use(nuxt.render)

function listen () {
  app.listen(port, '0.0.0.0')
  console.log('express listening on *:' + port)
}

module.exports = {
  start () {
    // Build only in dev mode with hot-reloading
    if (nuxtConfig.dev) {
      new Builder(nuxt).build()
        .then(listen)
        .catch((error) => {
          console.error(error)
          process.exit(1)
        })
    } else {
      listen()
    }
  },

  express: app
}
