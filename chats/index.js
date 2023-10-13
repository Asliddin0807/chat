const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const { connectionData } = require('./config/data')
connectionData()

app.use(express.json())
const client = require('./routes/client')
const createRoom = require('./routes/createRoom')
const chat = require('./routes/chat')
const cors = require('cors')


app.use(cors())
app.use('/', client)
app.use('/', createRoom)
app.use('/', chat)
const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
    console.log('server is running!')
})