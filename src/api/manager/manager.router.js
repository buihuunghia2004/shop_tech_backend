const express = require('express')
const Router = express.Router()
const controller = require('@/api/manager/manager.controller')
const authorizes = require('@/middlewares/authorizes')
const { ROLE } = require('@/utils/constant')
const validation = require('@/middlewares/validation')
const {createSchema} = require('@/api/manager/manager.validate')
const {createManagerDTO} = require('@/api/manager/manager.dto')

Router.route('/managers')
  .post(
    authorizes([ROLE.MANAGER]),
    validation(createSchema,createManagerDTO),
    controller.createManager
  )

module.exports = Router