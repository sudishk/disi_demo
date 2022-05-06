const express = require('express')
const appRouter = express.Router()
const countryController = require('../controllers/CountryController')
  
module.exports.countries= appRouter.get("/countries", countryController.loadCountries)
module.exports.countryById = appRouter.get("/countries/:id", countryController.loadCountyryById)