const express = require('express')
const appRouter = express.Router()
const bannerController = require('../controllers/bannerController')
  
module.exports.banners= appRouter.get("/banners", bannerController.loadBanners)
module.exports.bannerssById = appRouter.get("/banner/:id", bannerController.loadBannerById)