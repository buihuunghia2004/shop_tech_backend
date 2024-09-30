const { StatusCodes, ReasonPhrases } = require("http-status-codes")

class SuccessResponse {
  constructor({message, statusCode = StatusCodes.OK,reasonStatusCode = ReasonPhrases.OK, data = {}}) {
    this.message = !message ? reasonStatusCode : message
    this.statusCode = statusCode
    Object.keys(data).map(key => this[key] = data[key])
  }

  send(res) {
    return res.status(this.statusCode).json(this)
  }
}

class OK extends SuccessResponse {
  constructor(message, data) {
    super({message, data})
  }
}

class CREATED extends SuccessResponse {
  constructor(message, data) {
    super({message, statusCode: StatusCodes.CREATED, reasonStatusCode: ReasonPhrases.CREATED, data})
  }
}

class OFFSET_PAGINATE extends SuccessResponse {
  constructor(message, data) {
    const {limit, skip, totalRecord} = data[1]
    if (!totalRecord) {
      super({message, statusCode: StatusCodes.NOT_FOUND, reasonStatusCode: ReasonPhrases.NOT_FOUND, data:{data:[]}})
      return
    }
    const currentPage = skip / limit + 1
    const totalPage = Math.ceil(totalRecord / limit)
    const result = {
      data: data[0],
      panigation: {
        totalRecord,
        totalPage,
        limit,
        previostPage: currentPage == 1 ? 1 : currentPage - 1,
        currentPage,
        nextPage: currentPage == totalPage ? totalPage : currentPage + 1
      }
    }    
    super({message, statusCode: StatusCodes.OK, reasonStatusCode: ReasonPhrases.OK, data: result})
  }
}

module.exports = {
  OK,
  CREATED,
  OFFSET_PAGINATE
}