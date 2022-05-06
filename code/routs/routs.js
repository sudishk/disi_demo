const express = require('express')
const appRouter = express.Router()

const airPortRout = require('./airPortsRouts')
const userRouts = require('./userRouts')
const itenaryRouts = require('./itenaryRouts')
const countryRouts = require('./countryRouts')
const cityRouts = require('./cityRouts')
const categoriesRouts = require('./categoryRouts')
const menuRout = require('./menuRouts')
const bannersRout = require('./bannerRouts')
const featuredestinationRout = require('./featuredDestinationRout')



const contentsController = require('../controllers/contentController')
const userController = require('../controllers/usersController')

appRouter.get("/", contentsController.loadHome)

appRouter.get("/menus", menuRout.menus)
appRouter.get("/banners", bannersRout.banners)
appRouter.get("/featuredestinations", featuredestinationRout.featuredDestinations)


appRouter.get("/content/:id", contentsController.loadContentById)
appRouter.get("/content", contentsController.loadContent)

appRouter.get("/airports",airPortRout.airPort )
appRouter.get("/airports/:id", airPortRout.airPortById)
  
appRouter.get("/users", userRouts.users)
appRouter.get("/users/:id", userRouts.usersById)
appRouter.post("/createUser", userController.createUser)
appRouter.post("/updateUser/:id", userController.updateUserDetails)
  
appRouter.get("/itenaries", itenaryRouts.itenaries)
appRouter.get("/itenaries/:id", itenaryRouts.itenariesById)

appRouter.get("/countries", countryRouts.countries)
appRouter.get("/countries/:id", countryRouts.countryById)
  
appRouter.get("/cities", cityRouts.cities)
appRouter.get("/cities/:id", cityRouts.cityById)

appRouter.get("/categories", categoriesRouts.categories)
appRouter.get("/categories/:id", categoriesRouts.categoryById)
module.exports = appRouter