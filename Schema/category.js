'use strict'
const { mongoose } = require('./Mongoose');
const {SubCat}=require('../Schema/SubCategory')
var categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
           required:true
        },
        cat_des:{
            type : String,
       
        },
        SubCategory:[{ type: mongoose.Schema.Types.ObjectId, ref: SubCat }]
    },
    {
        timestamps: true
    }
)
let Category = mongoose.model('Category', categorySchema)
module.exports = { Category }
