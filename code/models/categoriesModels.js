const cons = require('../database/db')
module.exports = {
    getCategories: function(callback){
        cons.query("SELECT * FROM wtmuw_fields_categories", callback)
    },

    getCategoryById: function(id, callback){
        cons.query(`SELECT * FROM wtmuw_fields_categories WHERE id= ${id}`, callback)
    }
}


