'use strict'
const { Category } = require('../Schema/category');
const { Response } = require('./../utils/Response');
const { ErrorHandler } = require('./../utils/ErrrorHandler');
class CategoryController {
    /**
     * API | POST
     * Adds a product to database
     * @example {
     *      name: String
     *      cat_des:String
     * @param {*} req 
     *      req.body.name
     *      req.body.price
     *      req.body.quanitity
     * @param {*} res
     *      res.send
     *      res.status
     */
    static async addCategory(req, res) {
        try {
            let name =req.body.name
            let cat_des=req.body.cat_des
             if (name == null)
              throw { code: 400, message: 'Name is required' } 
             let category = new Category({name:name,cat_des:cat_des})
            await category.save()
            return new Response(res,{data: category,message: 'Category saved successfully'})
        } catch (error) {
            ErrorHandler.sendError(res, error)
        }
    }
//**************************************Showing Products***************************************/  
/**
//      * API | GET
//      * show Category from Database
//      * @example {
//         *      name: String
//         *      cat_des: String
//         * @param {*} req 
//         * @param {*} res
//         *      res.send
//         *      res.status
//         */  
    static async showCategory(req, res){
        try{
        await Category.find((err,data)=>{
        return new Response(res,{data:data,message:'Category are shown'})
            })
        }
        catch(error){
            ErrorHandler.sendError(res, error)
        }
    }

// //**************************************Deleting Product*****************************************/
// /**
//      * API | GET
//      * Delete product from database
//      * @example {
//         *      name: String
//         *      cat_des: String
//         * @param {*} req 
//         *      req.params.id
//         * @param {*} res
//         *      res.send
//         *      res.status
//         */  
    static async deleteCategory(req, res){
        try{
        await Category.findByIdAndDelete(req.params.id ,()=>{
        return new Response(res,{data:'',message:'Category are deleted'})
        })
    }
        catch(error){
            ErrorHandler.sendError(res, error)
    }
        }

// //****************************************Updating Category****************************************/
// /**
//      * API | PUT
//      * update product into database
//      * @example {
//         *      name: String
//         *      cat_des :String
//         * @param {*} req 
//         *      req.params.id
//         *       req.body.name
//         *       req.body.cat_des
//         * @param {*} res
//         *      res.send
//         *      res.status
//         */  

static async updateCategory(req, res){
    try{
     await Category.findByIdAndUpdate(req.params.id,
        {$set:
                    {
                       name:req.body.name,
                       cat_des:req.body.cat_des
                    }},()=>{        
                        return new Response(res,{data:'',message:'Category are updated'})
                })
        }
    catch(error){
        ErrorHandler.sendError(res, error)
        }
    }   
//**************************************************************************************************/
}

module.exports = {CategoryController}