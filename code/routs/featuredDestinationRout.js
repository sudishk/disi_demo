const express = require('express')
const appRouter = express.Router()
const featuredDestinationController = require('../controllers/featuredDestinationController')
  
module.exports.featuredDestinations= appRouter.get("/featuredestinations", featuredDestinationController.loadFeaturedDestinations)
module.exports.featuredDestinationById = appRouter.get("/featuredestination/:id", featuredDestinationController.loadFeaturedDestinationId)