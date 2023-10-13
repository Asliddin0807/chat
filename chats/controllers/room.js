const asyncHandler = require('express-async-handler')
const Room = require('../models/roomUser')
const Client = require('../models/client')
const Chat = require('../models/chat')


const createRoom = asyncHandler(async(req, res) => {
    const { id } = req.user
    const { reciever } = req.query
    const findSender = await Client.findById({ _id: id })
    if(!findSender){
        res.status(404).json({ message: 'User is not defined!' })
    }

    const findReciever = await Client.findById({ _id: reciever })
    if(!findReciever){
        res.status(404).json({ message: 'Reciever is not defined!' })
    }

    const room = await Room.findOne({
        member: {
            $elemMatch: {
                senderId: findSender._id,
                recieverId: reciever
            }
        }
    })

    if(room){
        res.status(200).json({ message: "Success", data: room })
    }else{
        const createUserRoom = new Room({
            member: [{
                senderId: findSender._id,
                recieverId: reciever
            }]
        })   
        await createUserRoom.save()
        const chatId = new Chat({
            chatId: createUserRoom._id
        })
        await chatId.save()
        res.status(200).json({ message: 'Success!', data: createUserRoom })
    }

})

const getUserRoom = asyncHandler(async(req, res) => {
    const { room_id } = req.query
    const find = await Room.findById({ _id: room_id })
    if(!find){
        res.status(404).json({ message: 'Room is not defined!' })
    }

    res.status(200).json({ message: 'Success!', data: find.member })
})

const deleteRoom = asyncHandler(async(req, res) => {
    const { chat_id } = req.query
    const find = await Room.findById({ _id: chat_id })
    if(!find){
        res.status(404).json({ message: 'Room is not defined!' })
    }else{
        await Room.findByIdAndDelete({ _id: chat_id })
        res.status(200).json({ message: 'Room success deleted!' })
    }
})

module.exports = {
    createRoom,
    getUserRoom,
    deleteRoom
}