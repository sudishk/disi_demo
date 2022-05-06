const cons = require('../database/db')
module.exports = {
    getCities: function(callback){
        cons.query("SELECT * FROM city", callback)
    },

    getCityById: function(id, callback){
        cons.query(`SELECT * FROM city WHERE id= ${id}`, callback)
    }
}