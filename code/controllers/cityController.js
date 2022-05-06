const mysql = require('mysql');
const cityModel = require('../models/cityModel')

exports.loadCityById = (req, res) => {
    cityModel.getCityById(req.params.id , function(error, rows){
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

exports.loadCities = (req, res) => {
    cityModel.getCities(function(error, rows){
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