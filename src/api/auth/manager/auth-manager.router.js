const express = require('express')
const {managerLogin, managerRegister} = require('./auth-manager.controller')
const validation = require('@/middlewares/validation')
const {loginSchema} = require('@/api/manager/manager.validate')
const {loginDTO} = require('@/api/manager/manager.dto')
const router = express.Router()

//signup
// router.post('/auth/manager/register',
//   // validation(loginSchema,loginDTO),
//   managerRegister
// )
router.post('/auth/manager/login', validation(loginSchema,loginDTO),managerLogin)

module.exports = router