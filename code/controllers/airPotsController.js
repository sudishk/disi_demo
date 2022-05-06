const mysql = require('mysql');
const airPortsModel = require('../models/airPortsModels')

exports.loadAirPort = (req, res) => {
    airPortsModel.getAirPots(function(error, rows){
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

exports.loadAirPortById= (req, res) => {
    airPortsModel.getAirPotsById(req.params.id , function(error, rows){
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
