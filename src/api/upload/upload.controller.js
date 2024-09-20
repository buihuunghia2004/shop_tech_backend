const { OK } = require('@/core/success.res')
const uploadService = require('./upload.service')
const uploadFile = async (req, res, next) => {
  try {
    const result = await uploadService.uploadFile(req.file,req.body.folder)
    new OK('upload successfully', {data:result}).send(res)
  } catch (error) {
    next(error)
  }
}

const uploadFiles = async (req, res, next) => {
  try {
    const result = await uploadService.uploadFiles(req.files,req.body.folder)
    new OK('upload successfully', {data:result}).send(res)
  } catch (error) {
    next(error)
  }
}

const destroyFile = async (req, res, next) => {
  try {
    const result = await uploadService.destroyFile(req.params.public_id)
    new OK('delete successfully', {data:result}).send(res)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  uploadFile,
  destroyFile,
  uploadFiles
}