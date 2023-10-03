const router = require('express').Router()
const { regis, login, getUser } = require('../controllers/client')
const { authMiddleWare } = require('../middleware/authMiddleWare')


router.post('/regis', regis)
router.post('/login', login)
router.get('/user', authMiddleWare, getUser)


module.exports = router