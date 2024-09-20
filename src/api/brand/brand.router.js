const express = require('express')
const Router = express.Router()
const authorizes = require('@/middlewares/authorizes')
const validation = require('@/middlewares/validation')
const validateId = require('@/middlewares/validateId')
const { ROLE } = require('@/utils/constant')

const {createSchema, updateByIdSchema} = require('@/api/brand/brand.validate')
const {requestDTO} = require('@/api/brand/brand.dto')
const controller = require('@/api/brand/brand.controller')

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

module.exports = Router