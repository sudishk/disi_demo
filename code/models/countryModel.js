const cons = require('../database/db')
module.exports = {
    getCountries: function(callback){
        cons.query("SELECT * FROM country", callback)
    },

    getCountryById: function(id, callback){
        cons.query(`SELECT * FROM country WHERE id= ${id}`, callback)
    }
}