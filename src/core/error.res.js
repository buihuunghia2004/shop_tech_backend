const { ReasonPhrases, StatusCodes } = require("http-status-codes")
const converError = require("../utils/converError")

class ErrorRes extends Error {
  constructor(message, status, details) {
    super(message)
    this.status = status
    this.details = Array.isArray(details) ? details : [details]
  }
}

class ValidateError extends ErrorRes {
  constructor(details = []) {
    console.log(details);
    super('Validate Error',StatusCodes.BAD_REQUEST, details)
  }
}

class ConflictError extends ErrorRes{
  constructor(message = ReasonPhrases.CONFLICT, detail) {
    super(message, StatusCodes.CONFLICT, converError(detail))
  }
}

class BadRequestError extends ErrorRes{
  constructor(message = ReasonPhrases.CONFLICT, detail) {
    super(message, StatusCodes.FORBIDDEN, converError(detail))
  }
}

module.exports = {
  ConflictError,
  BadRequestError,
  ValidateError
}