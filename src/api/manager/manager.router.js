const express = require('express')
const Router = express.Router()
const controller = require('@/api/manager/manager.controller')
const authorizes = require('@/middlewares/authorizes')
const { ROLE } = require('@/utils/constant')
const validation = require('@/middlewares/validation')
const {createSchema, updateByIdSchema} = require('@/api/manager/manager.validate')
const {requestDTO} = require('@/api/manager/manager.dto')
const validateId = require('@/middlewares/validateId')

Router.route('/')
  .get(
    controller.findAll
  )
  .post(
    authorizes([ROLE.MANAGER]),
    validation(createSchema,requestDTO.create),
    controller.createManager
  )

Router.route('/me')
  .get(
    authorizes([ROLE.MANAGER,ROLE.STAFF1,ROLE.STAFF2,ROLE.STAFF3]),
    controller.findMe
  )

Router.route('/:id')
  .get(
    validateId(),
    controller.findById
  )
  .patch(
    validateId(),
    authorizes([ROLE.MANAGER]),
    validation(updateByIdSchema,requestDTO.updateById),
    controller.updateById
  )
  .delete(
    validateId(),
    authorizes([ROLE.MANAGER]),
    controller.deleteManagerById
  )

module.exports = Router