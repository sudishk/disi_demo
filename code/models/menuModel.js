const cons = require('../database/db')
module.exports = {
    getCities: function(callback){
        cons.query("SELECT * FROM menu", callback)
    },

    getCityById: function(id, callback){
        cons.query(`SELECT * FROM menu WHERE id= ${id}`, callback)
    }
}