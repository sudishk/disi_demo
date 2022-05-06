const cons = require('../database/db')
module.exports = {
    getAirPots: function(callback){
        cons.query("SELECT * FROM airports", callback)
    },

    getAirPotsById: function(id, callback){
        cons.query(`SELECT * FROM airports WHERE id= ${id}`, callback)
    }
}