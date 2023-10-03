const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const { connectionData } = require('./config/data')
connectionData()
const io = new Server(server)
app.use(express.json())
const client = require('./routes/client')
const createRoom = require('./routes/createRoom')
const chat = require('./routes/chat')

// io.on('connection', (socket) => {
//     console.log('connected');
//     socket.on('chat message', (data) => {
//         io.emit('chat message', {
//             message: data.message,
//             user: data.user
//         })
//     })

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });

// })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/chat.html')
// })
app.use('/', client)
app.use('/', createRoom)
app.use('/', chat)
const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
    console.log('server is running!')
})