const express = require('express')
const router = express.Router()

router.use('/v1/api',require('../api/auth/manager/auth-manager.router'));
router.use('/v1/api',require('../api/manager/manager.router'));
router.use('/v1/api',require('../api/category/category.router'));
router.use('/v1/api',require('../api/brand/brand.router'));
router.use('/v1/api',require('../api/upload/upload.router'));

module.exports = router