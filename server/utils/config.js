const path = require('path')
const os = require('os')

module.exports = {
  port: process.env.PORT || 3000,
  ws: 3001,
  home: process.env.MANA_HOME || path.resolve(os.homedir(), '.mana')
}
