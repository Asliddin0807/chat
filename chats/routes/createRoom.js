const { createRoom, deleteRoom, getUserRoom } = require('../controllers/room')
const router = require('express').Router()
const { authMiddleWare } = require('../middleware/authMiddleWare')


router.post('/createRoom', authMiddleWare, createRoom)
router.post('/getRoom', getUserRoom)
router.post('/delete_room', deleteRoom)

module.exports = router