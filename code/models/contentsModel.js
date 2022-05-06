const cons = require('../database/db')
module.exports = {
    getContents: function(callback){
        cons.query("SELECT * FROM wtmuw_content", callback)
    },

    getContentsById: function(id, callback){
        cons.query(`SELECT * FROM wtmuw_content WHERE id= ${id}`, callback)
    }
}