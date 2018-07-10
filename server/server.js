#!/usr/bin/env node

const express = require('express')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const session = require('express-session')
const path = require('path')
const os = require('os')

const port = process.env.PORT || 3000
const home = process.env.MANA_HOME || path.resolve(os.homedir(), '.mana')
console.log('home is at', home)

const app = express()
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

app.set('port', port)
app.use(bodyParser.json())
app.use('/api', require('./api/index'))

const config = require('../nuxt.config.js')
config.dev = (process.env.NODE_ENV === 'dev')

const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
} else {
  listen()
}

function listen () {
  app.listen(port, '0.0.0.0')
  console.log('Server listening on localhost:' + port)
}
