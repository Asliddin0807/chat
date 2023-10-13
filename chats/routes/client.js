const router = require('express').Router()
const { regis, login, getUser, searchUsers, getMychats } = require('../controllers/client')
const { authMiddleWare } = require('../middleware/authMiddleWare')


router.post('/regis', regis)
router.post('/login', login)
router.get('/user', authMiddleWare, getUser)
router.post('/search', searchUsers)
router.get('/inbox', authMiddleWare, getMychats)

module.exports = router