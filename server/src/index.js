const path = require('path')
const http = require('http')

const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const cors = require('cors')

const { generateMessage, generateLocationMessage } = require('./utils/messages');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

const port = process.env.PORT || 4000

io.on('connection', (socket) => {
  console.log('New WebSocket connection.')
  socket.on('test', (message) => {
    console.log('Server', message)
  })
  socket.emit('test', 'SALUT dde ka server')

  socket.on('join', ({ username, room }, callback) => {
    const { error, user } = addUser({
      id: socket.id,
      username,
      room
    })

    if (error) {
      return callback(error)
    }

    socket.join(user.room)

    socket.emit('message', generateMessage('Admin', 'Welcome!'))
    socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined!`))

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter()

    if (filter.isProfane(message)) {
      return callback('Profanity is not allowed!')
    }

    const user = getUser(socket.id)
    console.log(user)

    io.to(user.room).emit('message', generateMessage(user.username, message))
    callback()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)

    if (user) {
      io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left the room!`))
    }
  })

  socket.on('sendLocation', ({ latitude, longitude }, callback) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://google.com/maps?q=${latitude},${longitude}`))
    callback()
  })
})

server.listen(port, () => {
  console.log('Server is listening on port ' + port)
})