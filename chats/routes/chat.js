const router = require('express').Router()
const { createChat, getMessageUser } = require('../controllers/chat')
const { authMiddleWare } = require('../middleware/authMiddleWare')

//send message
router.post('/send_message', authMiddleWare, createChat)
router.post('/get_chat', authMiddleWare, getMessageUser)
module.exports = router