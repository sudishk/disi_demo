const mysql = require('mysql');
const userModel = require('../models/userModel')
const cons = require('../database/db');
const { json } = require('express/lib/response');

exports.loadUserById = (req, res) => {
    userModel.getUserById(req.params.id , function(error, rows){
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

exports.loadUsers = (req, res) => {
    userModel.getUsers(function(error, rows){
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

exports.createUser = (req, res) => {
    console.log(req.body);
    userModel.createUser(req,function(error, rows){
        try{
            if(error){
                res.send("Sever encuntered  problem")
                console.log(error)

             }else{
                res.send("New record is added.")
            }

        }catch(error){
            console.log(error)
        }
    })
}

exports.updateUserDetails = (req, res) => {
    console.log(req.body);
    userModel.updateUserDetails(req,function(error, rows){
        try{
            if(error){
                res.send("Sever encuntered  problem")
                console.log(error)

             }else{
                res.send("One row is updated")
            }

        }catch(error){
            console.log(error)
        }
    })
}