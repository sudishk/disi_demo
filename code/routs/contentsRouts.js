const express = require('express')
const appRouter = express.Router()
const userController = require('../controllers/contentController')
 
appRouter.get("/content/:id", userController.loadContentById)
appRouter.get("/content", userController.loadContent)

module.exports = appRouter