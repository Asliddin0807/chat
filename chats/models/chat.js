const mongoose = require('mongoose')
const chatSchema = new mongoose.Schema({
    chatId: String,
    roomUser: [{
        senderName: String,
        text: String,
        clock: String,
        date: String
    }]
})

module.exports = mongoose.model('Chat', chatSchema)