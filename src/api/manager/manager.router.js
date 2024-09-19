const express = require('express')
const Router = express.Router()
const controller = require('@/api/manager/manager.controller')
const authorizes = require('@/middlewares/authorizes')
const { ROLE } = require('@/utils/constant')
const validation = require('@/middlewares/validation')
const {createSchema, updateByIdSchema} = require('@/api/manager/manager.validate')
const {requestDTO} = require('@/api/manager/manager.dto')

Router.route('/managers')
  .get(
    controller.findAll
  )
  .post(
    authorizes([ROLE.MANAGER]),
    validation(createSchema,requestDTO.create),
    controller.createManager
  )

Router.route('/managers/:id')
  .get(
    controller.findById
  )
  .patch(
    authorizes([ROLE.MANAGER]),
    validation(updateByIdSchema,requestDTO.updateById),
    controller.updateById
  )
  .delete(
    authorizes([ROLE.MANAGER]),
    controller.deleteManagerById
  )

module.exports = Router