#!/usr/bin/env node

// const config = require('./utils/config')
const express = require('./components/express')
const io = require('./components/socket.io')

express.start()
io.start()
