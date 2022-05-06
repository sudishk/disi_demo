const cons = require('../database/db')
module.exports = {
    getFeaturedDestinations: function(callback){
        cons.query("SELECT * FROM featuredDestination", callback)
    },

    getFeaturedDestinationById: function(id, callback){
        cons.query(`SELECT * FROM featuredDestination WHERE id= ${id}`, callback)
    }
}