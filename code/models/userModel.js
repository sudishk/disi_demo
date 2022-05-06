const cons = require('../database/db')
const zero = 0
const dateTime = require('node-datetime')
const correntDateTime = dateTime.create().format('Y-m-d H:M:S')
module.exports = {
    getUsers: function(callback){
        cons.query("SELECT * FROM wtmuw_users", callback)
    },

    getUserById: function(id, callback){
        cons.query(`SELECT * FROM wtmuw_users WHERE id= ${id}`, callback)
    },

    createUser: function(req, callback){
    try{

 const createUserQ = `INSERT INTO wtmuw_users(name, username, email, password, block, sendEmail, registerDate, lastvisitDate, activation, params, lastResetTime, resetCount, otpKey, otep, requireReset) VALUES ('${req.body.name}','${req.body.username}','${req.body.email}','${req.body.password}',0,1,'${correntDateTime}','${correntDateTime}','0','no value','${correntDateTime}',0,'no value','no value',0)`
        cons.query(createUserQ, callback)
    }catch(erro){
        console.log(erro)
    }    
    }, 

    updateUserDetails:function(req, callback){
       const createUserQ=  `UPDATE  wtmuw_users SET 
        name = '${req.body.name}' WHERE id = ${req.body.id}`             
        cons.query(createUserQ, callback)
    }
}