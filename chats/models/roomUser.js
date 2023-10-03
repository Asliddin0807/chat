const mongoose = require('mongoose')

const roomUser = new mongoose.Schema({
    member: [{
        senderId: {
            type: String
        },

        recieverId: {
            type: String
        }
    }]
})

module.exports = mongoose.model('Room', roomUser)