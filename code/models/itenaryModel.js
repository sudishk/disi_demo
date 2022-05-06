const cons = require('../database/db')
module.exports = {
    getItenaries: function(callback){
        cons.query("SELECT * FROM itenary", callback)
    },

    getItenaryById: function(id, callback){
        cons.query(`SELECT * FROM itenary WHERE id= ${id}`, callback)
    }
}