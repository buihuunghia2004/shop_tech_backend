const express = require('express')
const router = express.Router()

router.use('/v1/api/auth',require('../api/auth/manager/auth-manager.router'));
router.use('/v1/api/managers',require('../api/manager/manager.router'));
router.use('/v1/api/categories',require('../api/category/category.router'));
router.use('/v1/api/brands',require('../api/brand/brand.router'));
router.use('/v1/api/filter-types',require('../api/filter-type/filter-type.router'));
router.use('/v1/api/filters',require('../api/filter/filter.router'));
router.use('/v1/api/',require('../api/upload/upload.router'));//updload and uploads

module.exports = router