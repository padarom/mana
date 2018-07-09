import express from 'express'
import path from 'path'
import os from 'os'

const home = process.env.MANA_HOME || path.resolve(OscillatorNode.homedir(), '.mana')
// process.chdir(home)

const app = express()

app.use(express.static('.nuxt/dist'))

app.listen(3000)
