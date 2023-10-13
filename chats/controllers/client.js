const asyncHandler = require('express-async-handler')
const Client = require('../models/client')
const { createToken, refreshToken } = require('../config/tokens')

const regis = asyncHandler(async(req, res) => {
    const { username, email, password } = req.body
    const find = new Client({
        username: username,
        email: email,
        password: password
    })

    await find.save()
    res.status(200).json({ message: "Success!", data: {
        username: find.username,
        email: find.email,
        token: createToken(find.id)
    }})
})

const login = asyncHandler(async(req, res) => {
    const { username, password } = req.body
    const find = await Client.findOne({
        username: username,
        password: password
    }) 
    if(find){
        res.status(200).json({ message: 'Success', data: {
            username: find.username,
            email: find.email,
            token: refreshToken(find.id)
        }})
    }else{
        res.status(404).json({ message: 'User is not defined!' })
    }
})

const getUser = asyncHandler(async(req, res) => {
    const { id } = req.user
    const findUser = await Client.findById({ _id: id })
    if(!findUser){
        res.status(404).json({ message: 'User is not defined' })
    }

    res.status(200).json({ message: 'Success', data: findUser })
})

const getMychats = asyncHandler(async(req, res) => {
    const { id } = req.user
    const findUser = await Client.findById({ _id: id })
    if(!findUser){
        res.status(404).json({ message: 'User is not defined' })
    }

    res.status(200).json({ message: 'Success', data: findUser.myChats })
})

const searchUsers = asyncHandler(async(req, res) => {
    const { username } = req.body
    const findUser = await Client.findOne({ username: username })
    if(findUser){
        res.status(200).json({ message: 'Success!', data: findUser })
    }else{
        res.status(404).json({ message: 'User is not defined!'})
    }
})

// const getReciew = asyncHandler(async(req, res) => {
//     const { id } = req.query
//     const find = await Client.findById({ _id: id })
//     if(!find){
//         res.status(404).json({ message: 'Useer is not defined!' })
//     }

//     res.status(200).json({ message: 'Success!', data:  })
// })

module.exports = {
    regis,
    login,
    getUser,
    getMychats,
    searchUsers
}