const http = require('http')
const { Server } = require('socket.io')
const io = new Server(3000)
const server = http.createServer(io)

io.on('connected', (socket) => {
    console.log('user is connected')
})


server.listen(() => {
    console.log('socket is connected!')
})