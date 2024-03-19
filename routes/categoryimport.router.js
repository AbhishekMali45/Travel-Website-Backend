const express = require('express');
const mongoose = require('mongoose');

const Category = require('../model/category.model');
const categories = require('../data/categories')

const router = express.Router();

router.route("/").post(async (req,res)=>{
    try{
        await Category.deleteMany();
        const categoriesInDB = Category.insertMany(categories.data);
    res.json(categoriesInDB);
    }catch(err){
        console.log(err);
        res.json({message: "Could not add data to DB"})
    }
})

module.exports = router;