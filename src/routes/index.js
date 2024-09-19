const express = require('express')
const router = express.Router()

router.use('/v1/api',require('../api/auth/manager/auth-manager.router'));

module.exports = router