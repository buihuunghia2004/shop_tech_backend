const { StatusCodes, ReasonPhrases } = require("http-status-codes")

class SuccessResponse {
  constructor({message, statusCode = StatusCodes.OK,reasonStatusCode = StatusCodes.OK, data = {}}) {
    this.message = !message ? ReasonPhrases.OK : message
    this.status = statusCode
    Object.keys(data).map(key => this[key] = data[key])
  }

  send(res) {
    return res.status(this.status).json(this)
  }
}

class OK extends SuccessResponse {
  constructor(message, data) {
    super({message, data})
  }
}

class CREATED extends SuccessResponse {
  constructor(message, data) {
    super({message, statusCode: StatusCodes.CREATED, reasonStatusCode: StatusCodes.CREATED, data})
  }
}

module.exports = {
  OK,
  CREATED
}