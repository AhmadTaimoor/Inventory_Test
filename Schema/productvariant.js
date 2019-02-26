'use strict'
const { mongoose } = require('./Mongoose');
const { product }= require('../Schema/product')

var productvariantSchema = new mongoose.Schema(
    {
       Shape : {
            type: String,
           required:true
        },
        Size:{
            type : String,
            required:true
        },
        Weight:{
            type:Number
        },
        Product: {
            type:mongoose.Schema.Types.ObjectId,
       //      ref: product
           }
    },
    {
        timestamps: true
    }
)
let ProductVariant = mongoose.model('ProductVariant', productvariantSchema)
module.exports = { ProductVariant }