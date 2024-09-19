const { ReasonPhrases, StatusCodes } = require("http-status-codes")
const converError = require("../utils/converError")

class ErrorRes extends Error {
  constructor(message, status, detail) {
    super(message)
    this.status = status
    this.details = [detail]
  }
}

class ValidateError extends Error {
  constructor(details = []) {
    super(message = ReasonPhrases.BAD_REQUEST, this.status = StatusCodes.BAD_REQUEST, details)
  }
}

class ConflictError extends ErrorRes{
  constructor(message = ReasonPhrases.CONFLICT, detail) {
    Array.isArray(detail) || (detail = [detail])
    super(message, this.status = StatusCodes.CONFLICT, converError(detail))
  }
}

class BadRequestError extends ErrorRes{
  constructor(message = ReasonPhrases.CONFLICT, detail) {
    Array.isArray(detail) || (detail = [detail])
    super(message, this.status=StatusCodes.FORBIDDEN, converError(detail))
  }
}

module.exports = {
  ConflictError,
  BadRequestError,
  ValidateError
}