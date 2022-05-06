const express = require('express')
const appRouter = express.Router()
const userController = require('../controllers/usersController')
  
module.exports.users= appRouter.get("/users", userController.loadUsers)
module.exports.usersById = appRouter.get("/users/:id", userController.loadUserById)
module.exports.createUser= appRouter.post("/user", userController.createUser)

