const mysql = require('mysql');
const featuredDestinationModel = require('../models/featuredDestinationModel')

exports.loadFeaturedDestinationId = (req, res) => {
    featuredDestinationModel.getFeaturedDestinationById(req.params.id , function(error, rows){
        try{
            if(error){
                res.send("Sever encuntered  problem")
                console.log(error)

             }else{
                res.send(JSON.stringify(rows))
            }

        }catch(error){
            console.log(error)
        }
    })
}

exports.loadFeaturedDestinations = (req, res) => {
    featuredDestinationModel.getFeaturedDestinations(function(error, rows){
        try{
            if(error){
                res.send("Sever encuntered  problem")
                console.log(error)

             }else{
                res.send(JSON.stringify(rows))
            }

        }catch(error){
            console.log(error)
        }
    })
}