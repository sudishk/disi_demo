const mysql = require('mysql');
const cons = mysql.createConnection({
    host:"localhost",
    user:"nodeuser",
    password : "Sudish@mysql#8021",
    database : "joomla_db"
})

cons.connect(function (error){
    if(error) throw error
    console.log('Connected')

    const selectque ='SELECT * FROM wtmuw_content'
    cons.query(selectque, function(error, result){
        if(error) throw error
        console.log(result)
    })
})

module.exports = cons;  