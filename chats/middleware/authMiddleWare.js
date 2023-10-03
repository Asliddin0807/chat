const Clients = require('../models/client')
require("dotenv").config()
const jwt = require('jsonwebtoken')
const verifyning = 'mysecretkey'

const authMiddleWare = async(req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if(token){
        const decode = jwt.verify(token, verifyning)
        const users = await Clients.findById(decode?.id)
        req.user = users
        next()
    }else{
        res.status(404).json({ message: 'This is not token!' })
    }
}

module.exports = { authMiddleWare }