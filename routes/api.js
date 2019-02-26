'use strict'
const { Router } = require('express')
const { ProductController } = require('../Controller/ProductController');
const { CategoryController } = require('../Controller/CategoryController');
const {SubCategoryController} =require('../Controller/SubCategoryController')
const {ProductVariantController} =require('../Controller/ProductVariantController')
const {EmailController}=require('../Controller/EmailController');
const router = new Router()
/* PRODUCT */
router.post('/product', ProductController.addProduct)
router.get('/product',ProductController.showProduct)
router.get('/product/delete/:id',ProductController.deleteProduct)
router.get('/product/all/:id',ProductController.getProdrelatedtoSubCat)
router.put('/product/update/:id',ProductController.updateProduct)
/* CATEGORY */
router.post('/category',CategoryController.addCategory)
router.get('/category',CategoryController.showCategory)
router.get('/category/delete/:id',CategoryController.deleteCategory)
router.put('/category/update/:id',CategoryController.updateCategory)
/* SUBCATEGORY */
router.post('/subcategory',SubCategoryController.addSubCategory)
router.get('/subcategory',SubCategoryController.showSubCategory)
router.get('/subcategory/delete/:id',SubCategoryController.deleteSubCategory)
router.get('/subcategory/all/:id',SubCategoryController.getsubcatrelatedCat)
router.put('/subcategory/update/:id',SubCategoryController.updateSubCategory)
/* PRODUCT VARIANT */
router.post('/productvariant',ProductVariantController.addProductVariant)
router.get('/productvariant',ProductVariantController.showProductVariant)
router.get('/productvariant/delete/:id',ProductVariantController.deleteProductVariant)
router.get('/productvariant/all/:id',ProductVariantController.getProdvarrelatedtoProd)
router.put('/productvariant/update/:id',ProductVariantController.updateProductVariant)

/*Email*/
router.get('/email',EmailController.getEmail)
module.exports = router