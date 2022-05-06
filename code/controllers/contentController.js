const mysql = require('mysql');
const contentsModel = require('../models/contentsModel')
exports.loadHome = (req, res) => {
    res.render("index")
}

exports.loadContentById = (req, res) => {
contentsModel.getContentsById(req.params.id , function(error, rows){
    res.send(JSON.stringify(rows))
})
}

exports.loadContent = (req, res) => {
    contentsModel.getContents(function(error, rows){
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