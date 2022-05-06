const express = require('express')
const appRouter = express.Router()
const cityController = require('../controllers/cityController')
  
module.exports.cities= appRouter.get("/cities", cityController.loadCities)
module.exports.cityById = appRouter.get("/cities/:id", cityController.loadCityById)