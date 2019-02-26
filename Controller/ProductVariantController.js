/*eslint-disable no-eq-null */
/*eslint-disable eqeqeq */
/*eslint-disable prefer-destructuring */
'use strict'
const { ProductVariant } = require('../Schema/productvariant');
const { Response } = require('./../utils/Response');
const { ErrorHandler } = require('./../utils/ErrrorHandler');

class ProductVariantController {

    /**
     * API | POST
     * Adds a product to database
     * @example {
     *      Shape: String
     *      Size: Number
     *      Weight:Number
     * @param {*} req 
     *      req.body.shape
     *      req.body.Size
     *      req.body.Weight
     * @param {*} res
     *      res.send
     *      res.status
     */
    static async addProductVariant (req, res) {
        try {
            const Shape = req.body.Shape
            const Size = req.body.Size
            const Weight = req.body.Weight
            const Product = req.body.Product

             if (Shape == null || Size == null) {
 throw { code: 400,
         message: 'Shape/Size is required' } 
} 
            
return new Response(res, { data: Product,
message: 'Product saved successfully' })
        } catch (error) {
            ErrorHandler.sendError(res, error)
        }
    }
//**************************************showing Product Variant***************************************/  
/**
 *     * aPI | GET
 *       * show Product Variant from Database
 *       * @example {
 *          *      Shape: String
 *          *      Size: String
 *          *      Weight:Number
 *          * @param {*} req 
 *          * @param {*} res
 *          *      res.send
 *          *      res.status
 */         
  
    static async showProductVariant (req, res) {
        try {
        await ProductVariant.find((_err, data)=>new Response(res, { data,
message: 'ProductVariant retreived successfully' }))
} catch (error) {
            ErrorHandler.sendError(res, error)
}
    }

////**************************************Deleting ProductVariant*****************************************/
///**
//*aPI | GET
//*delete product from database
//*@example {
//*shape: String
//*size: String
//*weight:Number
//*@param {*} req 
//*req.params.id
//*@param {*} res
//*res.send
//*res.status
//*/  
    static async deleteProductVariant (req, res) {
        try {
        await ProductVariant.findByIdAndDelete(req.params.id, ()=>new Response(res, { data: '',
message: 'ProductVariant deleted successfully' }))
} catch (error) {
            ErrorHandler.sendError(res, error)
}
    }

////****************************************Updating ProductVariant****************************************/
///**
//*aPI | PUT
//*update product into database
//*@example {
//*shape: String
//*size: String
//*weight:Number
//*@param {*} req 
//*req.params.id
//*req.body.Shape
//*req.body.Size
//*req.body.Weight
//*@param {*} res
//*res.send
//*res.status
//*/  

static async updateProductVariant (req, res) {
    try {
     await ProductVariant.findByIdAndUpdate(
req.params.id,
        { $set:
                    {
                      Shape: req.body.Shape,
                      Size: req.body.Size,
                      Weight: req.body.Weight
                    } }, ()=>new Response(res, { data: '',
message: 'ProductVariant updated successfully' })
)
} catch (error) {
        ErrorHandler.sendError(res, error)
}
}

////**************************************************************************************************/
static async getProdvarrelatedtoProd (req, res) {
    try {
     await ProductVariant.find({ Product: req.params.id }, (err, Product)=>new Response(res, { data: Product,
message: 'ProductVariant related to a specific Product is retreived'}))
} 
    catch (error) {
    ErrorHandler.sendError(res, error)
}


    }
}

module.exports = { ProductVariantController }