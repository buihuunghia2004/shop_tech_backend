const express = require('express')
const accessController = require('../../controllers/access.controller')
const router = express.Router()

//signup
router.post('/managers/resiter', accessController.signup)

module.exports = router