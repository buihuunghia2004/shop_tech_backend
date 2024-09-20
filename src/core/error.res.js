const { ReasonPhrases, StatusCodes } = require("http-status-codes")
const converError = require("../utils/converError")

class ErrorRes extends Error {
  constructor(message, status, details) {
    super(message)
    this.status = status
    this.details = Array.isArray(details) ? details : (details ? [details] : [])
  }
}

class ValidateError extends ErrorRes {
  constructor(details = []) {
    console.log(details);
    super('Validate Error',StatusCodes.BAD_REQUEST, details)
  }
}

class UnAuthorizedError extends ErrorRes{
  constructor() {
    super(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED)
  }
}

class ForbidentError extends ErrorRes{
  constructor() {
    super(ReasonPhrases.FORBIDDEN, StatusCodes.FORBIDDEN)
  }
}

class ConflictError extends ErrorRes{
  constructor(message = ReasonPhrases.CONFLICT, detail) {
    super(message, StatusCodes.CONFLICT, converError(detail))
  }
}

class BadRequestError extends ErrorRes{
  constructor(message = ReasonPhrases.CONFLICT, detail) {
    super(message, StatusCodes.BAD_REQUEST, converError(detail))
  }
}

class NotFoundError extends ErrorRes{
  constructor(message = ReasonPhrases.NOT_FOUND, detail) {
    super(message, StatusCodes.NOT_FOUND, converError(detail))
  }
}

module.exports = {
  ErrorRes,
  ConflictError,
  BadRequestError,
  ValidateError,
  UnAuthorizedError,
  ForbidentError,
  NotFoundError
}