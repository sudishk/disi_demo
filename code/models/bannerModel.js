const cons = require('../database/db')
module.exports = {
    getBanners: function(callback){
        cons.query("SELECT * FROM banner", callback)
    },

    getBannersById: function(id, callback){
        cons.query(`SELECT * FROM banner WHERE id= ${id}`, callback)
    }
}