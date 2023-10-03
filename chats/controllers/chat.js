const asyncHandler = require('express-async-handler')
const Chat = require('../models/chat')
const Client = require('../models/client')


const createChat = asyncHandler(async(req, res) => {
    const { user_id, chat_id } = req.query
    const { text } = req.body
    const { id } = req.user
    const find = await Client.findById({ _id: user_id })
    if(find){
        const createChat = await Chat.findOne({ chatId: chat_id })
        if(!createChat){
            res.status(404).json({ message: 'Chat is not defined!' })
        }else{
            const findSender = await Client.findById({ _id: id })
            const date = new Date()
            let mas = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']
            const app = `${date.getDate()} ${mas[date.getMonth()]} ${date.getFullYear()}`
            let clock = `${date.getHours()}:${date.getMinutes()}`
            let obj = {
                senderName: findSender.username,
                text: text,
                clock: clock,
                date: app
            }

            const sendMessage = createChat.roomUser.push(obj)
            await createChat.save()
            obj = {}
            const addUserChats = find.myChats.find(object => object.chatId == chat_id)
            if(!addUserChats){
                let chatItem = {
                    chatId: chat_id,
                    username: findSender.username
                }

                const userChat = find.myChats.push(chatItem)
                await find.save()
                chatItem = {}
            }

            const findSenderChat = findSender.myChats.find(object => object.chatId == chat_id)
            if(!findSenderChat){
                let chatItemSender = {
                    chatId: chat_id,
                    username: find.username
                }

                let container = findSender.myChats.push(chatItemSender)
                await findSender.save()
            }

            res.status(200).json({ message: 'Success!' })
        }
        
    }else{
        res.status(404).json({ message: 'User is not defined!' })
    }
})

const getMessageUser = asyncHandler(async(req, res) => {
    const { id } = req.user
    const { chat_id } = req.query
    const findUser = await Client.findById({ _id: id })
    if(!findUser){
        res.status(404).json({ message: 'User is not defined!' })
    }else{
        const findChat = await Chat.findOne({ chatId: chat_id })
        if(!findChat){
            res.status(404).json({ message: 'Chat is not defined!' })
        }

        res.status(200).json({ message: 'Success!', data: findChat })
    }
})

module.exports = {
    createChat,
    getMessageUser
}