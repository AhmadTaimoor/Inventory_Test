'use strict'
const { Response }= require('./../utils/Response');
const {ErrorHandler}= require('./../utils/ErrrorHandler');
const { SubCategory}= require('../Schema/SubCategory');

class SubCategoryController {

    /**
     * aPI | POST
     * Adds a Subcategory to database
     * @example {
     *      name: String
     * @param {*} req 
     *      req.body.name
     * @param {*} res
     *      res.send
     *      res.status
     */

    static async addSubCategory (req, res) {
        try {
            const name = req.body.name
            const Category = req.body.Category

             if (name == null) { 
throw { code: 400,
message: 'Name is required' } } 
              const subcategory = new SubCategory({ name,
Category })

            await subcategory.save()
            
return new Response(res, { data: SubCategory, 
message: 'SubCategory saved successfully' });
        } catch (error) {
            ErrorHandler.sendError(res, error)
        }
    }

//**************************************showing SubCategory***************************************/  
///**
//*aPI | GET
//*delete product from database
//*@example {
//*name: String
//*@param {*} req 
//*req.params.id
//*@param {*} res
//*res.send
//*res.status
//*/  
    static async showSubCategory (req, res) {
        try {
        await SubCategory.find((err, data)=>new Response(res, { data, 
message: 'SubCategory retreived successfully' }))
} catch (error) {
            ErrorHandler.sendError(res, error);
        
}
    }

////**************************************Deleting SubCategory*****************************************/
///**
//*aPI | GET
//*delete product from database
//*@example {
//*name: String
//*@param {*} req 
//*req.params.id
//*@param {*} res
//*res.send
//*res.status
//*/  
    static async deleteSubCategory (req, res) {
        try {
        await SubCategory.findByIdAndDelete(req.params.id, ()=>new Response(res, { data: '', 
message: 'SubCategory deleted successfully' }))
} catch (error) {
            ErrorHandler.sendError(res, error);
        
}
    }

////****************************************Updating SubCategory****************************************/
///**
//*aPI | PUT
//*update subcategory into database
//*@example {
//*name: String
//*@param {*} req 
//*req.params.id
//*req.body.name
//*@param {*} res
//*res.send
//*res.status
//*/  

static async updateSubCategory (req, res) {
    try {
     await SubCategory.findByIdAndUpdate(
req.params.id,
        { $set:
                    {
                       name: req.body.name,
                       cat_des: req.body.cat_des
                    } }, ()=>new Response(res, { data: '', 
message: 'SubCategory updated successfully' }))
} catch (error){
        ErrorHandler.sendError(res, error);
}
}
////**************************************************************************************************/
static async getsubcatrelatedCat (req, res) {
    try {
     await SubCategory.find({ Category: req.params.id }, (err, Category)=>new Response(res, { data: Category, 
    message: 'SubCategory relating to the specific category is retreived' }))
    } 
    catch (error) {
    ErrorHandler.sendError(res, error);
    }   
    }
}

module.exports={ SubCategoryController }