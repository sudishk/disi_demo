const express = require('express')
const appRouter = express.Router()
const categoriesController = require('../controllers/categoriesController')
  
module.exports.categories= appRouter.get("/categories", categoriesController.loadCategories)
module.exports.categoryById = appRouter.get("/categories/:id", categoriesController.loadCategoryById)