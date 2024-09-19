const { ValidateError } = require('../core/error.res')
const { pickData } = require('../utils')
const converError = require('../utils/converError')

const validation = (schema = {}, dto = []) => {
  return async (req, res, next) => {
    try {
      req.body = pickData(req.body, dto)
      await schema.validateAsync(req.body, { abortEarly: false })
      next()
    } catch (error) {
      console.log(error);
      next(new ValidateError(
        error.details.map(detail => converError(detail))
      ))
    }
  }
}

module.exports = validation
