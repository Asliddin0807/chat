const mongoose = require('mongoose')
const clientSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    myChats: [{
        chatId: String,
        username: String,
    }]
})

module.exports = mongoose.model('Client', clientSchema)