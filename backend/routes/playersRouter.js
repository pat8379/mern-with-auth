const asyncHandler = require('express-async-handler')
const playersRouter = require('express').Router()
const Player = require('../playersModel')

playersRouter.get('/', asyncHandler(async (req,res,next) => {
    const players = await Player.find()
    res.json(players)
}))

playersRouter.get('/:playerName', asyncHandler(async (req,res,next) => {
    const players = await Player.find({playersName: req.params.playerName})
    res.send(players)
}))

playersRouter.post('/', asyncHandler(async (req,res,next) => {
    // console.log(req.body.text)
    const player = await Player.create({
        playersName: req.body.playersName,
        rating: req.body.rating,
        position: req.body.position,
        team: req.body.team
    })
    res.send(player)
}))

playersRouter.put('/:id',  asyncHandler(async(req,res,next) =>{
    res.send(`put: ${req.params.id}`)
}))

playersRouter.delete('/:playerName', asyncHandler(async(req,res,next) =>{
    const player = await Player.deleteOne({playersName: req.params.playerName})
    res.send(player)
}))

module.exports = playersRouter