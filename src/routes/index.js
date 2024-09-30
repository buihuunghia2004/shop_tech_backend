const express = require('express')
const router = express.Router()

router.use('/api/v1/auth',require('../api/auth/manager/auth-manager.router'));
router.use('/api/v1/managers',require('../api/manager/manager.router'));
router.use('/api/v1/categories',require('../api/category/category.router'));
router.use('/api/v1/brands',require('../api/brand/brand.router'));
router.use('/api/v1/filter-types',require('../api/filter-type/filter-type.router'));
router.use('/api/v1/filters',require('../api/filter/filter.router'));
router.use('/api/v1/products',require('../api/product/product.router'));
router.use('/api/v1/',require('../api/upload/upload.router'));//updload and uploads

module.exports = router