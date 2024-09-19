const express = require('express')
const authManagerController = require('./auth-manager.controller')
const router = express.Router()

//signup
router.post('/auth/manager/register', authManagerController.managerRegister)
router.post('/auth/manager/login', authManagerController.managerLogin)

module.exports = router