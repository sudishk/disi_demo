const express = require('express')
const userRouter = express.Router()
const airPortsController = require('../controllers/airPotsController')
  
module.exports.airPort= userRouter.get("/airports", airPortsController.loadAirPort)
module.exports.airPortById = userRouter.get("/airports/:id", airPortsController.loadAirPortById)

//module.exports = userRouter