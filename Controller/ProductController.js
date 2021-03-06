/*eslint-disable sort-keys */
/*eslint-disable prefer-destructuring */
/*eslint-disable valid-jsdoc */
/*eslint-disable consistent-return */
/*eslint-disable eqeqeq */
/*eslint-disable max-statements */
//eslint-disable-next-line spaced-comment
/* eslint-disable no-eq-null */
'use strict'
const { Product } = require('../Schema/product');
const { Response } = require('./../utils/Response');
const { ErrorHandler } = require('./../utils/ErrrorHandler');

class ProductController {

    /**
     * aPI | POST
     * Adds a product to database
     * @example {
     *      name: String
     *      price: Number
     *      quantity:Number
     * @param {*} req 
     *      req.body.name
     *      req.body.price
     *      req.body.quanitity
     * @param {*} res
     *      res.send
     *      res.status
     */
    static async addProduct (req, res) {
        try {
            const name = req.body.name
            const price = req.body.price
            const quantity = req.body.quantity
            const SubCategory = req.body.SubCategory

             if (name == null || price == null) {
        throw { code: 400,message: 'Name/Price is required' }
                                                } 
            const product = new Product({ name , price , quantity, SubCategory })

            await product.save()
            
return new Response(res, { data: product,
message: 'Category saved successfully' })
        } catch (error) {
            ErrorHandler.sendError(res, error)
        }
    }

//**************************************showing Products***************************************/  
/**
 * aPI | GET
 * Retreive product from database
 * @example {
 *      name: String
 *      price: Number
 *      quantity:Number
 * @param {*} req 
 *      
 * @param {*} res
 *      res.send
 *      res.status
 */  
    static async showProduct (_req, res) {
        try {
        await Product.find((_err, data)=>new Response(res, { data,
message: 'Category retreived successfully' }))
} catch (error) {
            ErrorHandler.sendError(res, error)
}
    }

//**************************************deleting Product*****************************************/
/**
 * aPI | GET
 * Delete product from database
 * @example {
 *      name: String
 *      price: Number
 *      quantity:Number
 * @param {*} req 
 *      req.params.id
 * @param {*} res
 *      res.send
 *      res.status
 */  
    static async deleteProduct (req, res) {
        try {
        await Product.findByIdAndDelete(req.params.id, ()=>new Response(res, { data: '',
message: 'Category Deleted successfully' }))
} catch (error) {
            ErrorHandler.sendError(res, error)
}
    }

//****************************************updating Product****************************************/
/**
 * aPI | PUT
 * update product into database
 * @example {
 *      name: String
 *      price: Number
 *      quantity:Number
 * @param {*} req 
 *      req.params.id
 *       req.body.name
 *       req.body.price
 *       req.body.quantity
 * @param {*} res
 *      res.send
 *      res.status
 */  

static async updateProduct (req, res) {
    try {
     await Product.findByIdAndUpdate(
req.params.id,
        { $set:
                    {
                       name: req.body.name,
                       price: req.body.price,
                       quantity: req.body.quantity
                    } }, ()=>new Response(res, { data: '',
message: 'Category updated successfully' })
)
} catch (error) {
        ErrorHandler.sendError(res, error)
}
}
//**************************************************************************************************/

static async getProdrelatedtoSubCat (req, res) {
    try {
     await Product.find({ SubCategory: req.params.id }, (_err, SubCategory)=>new Response(res, { data: SubCategory,
message: 'Product related to a specific subcatgeory is retreived' }))
    } catch (error) {
    ErrorHandler.sendError(res, error)
}
}
}

module.exports = { ProductController }