const express = require('express')
const appRouter = express.Router()
const menuController = require('../controllers/menuController')
  
module.exports.menus = appRouter.get("/menus", menuController.loadMenus)
module.exports.menusById = appRouter.get("/menu/:id", menuController.loadMenuId)