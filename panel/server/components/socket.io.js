const { app } = require('./express')
const { ws } = require('../utils/config')
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('a user connected')
})

module.exports = {
  start () {
    http.listen(ws, () => {
      console.log('socket.io listening on *:' + ws)
    })
  },

  io: io
}
