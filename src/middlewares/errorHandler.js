const { StatusCodes } = require("http-status-codes")

const unexpectedError = ((req, res, next) => {  
  const error = new Error('Not found')
  error.status = StatusCodes.NOT_FOUND
  next(error)
})

const errorHandling = ((error, req, res, next) => {  
  const statusCode = error.status || StatusCodes.INTERNAL_SERVER_ERROR
  const result = {
    message: error.message,
    status: statusCode,
  }
  if (error.details && error.details.length) {
    result.details = error.details
  }
  console.log(result);
  
  return res.status(statusCode).json(result)
})

module.exports = () => [unexpectedError, errorHandling]