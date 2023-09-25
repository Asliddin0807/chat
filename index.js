const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')

let users = []
let connections = []

const io = new Server(server)

io.on('connection', (socket) => {
    console.log('connected');
    socket.on('chat message', (data) => {
        io.emit('chat message', {
            message: data.message,
            user: data.user
        })
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chat.html')
})

app.use(express.static(__dirname + '/assets'))


const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
    console.log('server is running!')
})