const { OBJECT_ID } = require('@/utils/joi-constant')
const { NotFoundError, ErrorRes } = require('../core/error.res')
const { StatusCodes } = require('http-status-codes')

const validateId = () => {
  return async (req, res, next) => {
    try {
      const id = req.params.id
      await OBJECT_ID.validateAsync(id)
      next()
    } catch (error) {
      next(
        new ErrorRes('Not found', StatusCodes.NOT_FOUND)
      )
    }
  }
}

module.exports = validateId
