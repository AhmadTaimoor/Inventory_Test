'use strict'
const { mongoose } = require('./Mongoose');
const {Category} = require('../Schema/category')
const {product}=require('../Schema/product')
var subcategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
           required:true
        },
        Category: {
            type:mongoose.Schema.Types.ObjectId,
             ref:Category,
             required:true  },
        Product:[{type:mongoose.Schema.Types.ObjectId, ref:product}]
    },
    {
        timestamps: true
    }
)
let SubCategory = mongoose.model('SubCategory', subcategorySchema)
module.exports = { SubCategory }
