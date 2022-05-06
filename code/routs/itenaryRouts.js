const express = require('express')
const appRouter = express.Router()
const itenaryController = require('../controllers/itenaryController')
  
module.exports.itenaries= appRouter.get("/itenaries", itenaryController.loadItenaries)
module.exports.itenariesById = appRouter.get("/itenaries/:id", itenaryController.loadItenaryById)