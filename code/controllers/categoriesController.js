const mysql = require('mysql');
const categoryModel = require('../models/categoriesModels')

exports.loadCategories = (req, res) => {
    categoryModel.getCategories(function(error, rows){
        try{
            if(error){
                res.send("Sever encuntered  problem")
             }else{
                res.send(JSON.stringify(rows))
            }

        }catch(error){
            console.log(error)
        }

    })
}

exports.loadCategoryById= (req, res) => {
    categoryModel.getCategoryById(req.params.id , function(error, rows){
        try{
            if(error){
                res.send("Sever encuntered  problem")
                console.log(error)

             }else{
                res.send(JSON.stringify(rows))
            }

        }catch(error){
            console.log(error)
        }
})
}
