const express = require('express')
const Router = express.Router()
const authorizes = require('@/middlewares/authorizes')
const { ROLE } = require('@/utils/constant')

const controller = require('@/api/upload/upload.controller')
const upload = require('@/middlewares/upload')
const multipleUpload = require('@/middlewares/multiple-upload')

Router.route('/upload')
  .post(
    authorizes([ROLE.MANAGER]),
    upload.single('file'),
    controller.uploadFile
  )

Router.route('/upload/:public_id')
  .delete(
    authorizes([ROLE.MANAGER]),
    controller.destroyFile
  )

Router.route('/uploads')
  .post(
    authorizes([ROLE.MANAGER]),
    multipleUpload,
    controller.uploadFiles
  )  

module.exports = Router