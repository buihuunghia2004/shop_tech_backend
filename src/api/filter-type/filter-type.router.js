const express = require('express')
const Router = express.Router()
const controller = require('@/api/filter-type/filter-type.controller')
const authorizes = require('@/middlewares/authorizes')
const { ROLE } = require('@/utils/constant')
const validation = require('@/middlewares/validation')
const {createSchema, updateByIdSchema} = require('@/api/filter-type/filter-type.validate')
const {requestDTO} = require('@/api/filter-type/filter-type.dto')
const validateId = require('@/middlewares/validateId')

Router.route('/')
  .get(
    controller.findAll
  )
  .post(
    authorizes([ROLE.MANAGER]),
    validation(createSchema,requestDTO.create),
    controller.createNew
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
    controller.deleteById
  )
Router.route('/:id/filters')
  .get(
    validateId(),
    controller.findFilters
  )
module.exports = Router