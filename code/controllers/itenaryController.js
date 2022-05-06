const mysql = require('mysql');
const itenaryModel = require('../models/itenaryModel')

exports.loadItenaryById = (req, res) => {
    itenaryModel.getItenaryById(req.params.id , function(error, rows){
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

exports.loadItenaries = (req, res) => {
    itenaryModel.getItenaries(function(error, rows){
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