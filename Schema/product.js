'use strict'
const { mongoose } = require('./Mongoose');
const {SubCategory}=require('../Schema/SubCategory')
const{ProductVariant}=require('../Schema/productvariant')
var productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
           required:true
        },
        price:{
            type : Number,
            required:true
        },
        quantity:{
            type:Number
        }, 
        SubCategory: {
            type:mongoose.Schema.Types.ObjectId,
             ref:SubCategory
           },
        ProductVariant:[{ type: mongoose.Schema.Types.ObjectId, ref: ProductVariant}]
    },
    {
        timestamps: true
    }
)
let Product = mongoose.model('Product', productSchema)
module.exports = { Product }
