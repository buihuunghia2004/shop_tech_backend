const { UnAuthorizedError, ForbidentError } = require("@/core/error.res")
const jwt = require('@helpers/jwt')
const keyTokenModel = require("@/api/keyToken/keyToken.model")
const HEADER = {
  AUTHORIZATION : 'authorization',
  CLIENT_ID : 'x-client-id',
}

const authorizes = (roles) => {
  return async (req, res, next) => {
    //check clientId and accessToken from header
    const clientId = req.headers[HEADER.CLIENT_ID]?.toString()
    if (!clientId) next(new UnAuthorizedError())
    const token = req.headers[HEADER.AUTHORIZATION]?.toString().split(' ')[1]
    if (!token) next(new UnAuthorizedError())
      
    //find objectKey by clientId
    const objKey = await keyTokenModel.findOne({ user: clientId }).lean()
    if (!objKey) next(new UnAuthorizedError())
    
    //decode and check clientId
    const decode = await jwt.verifyToken(token, objKey.publicKey)
    if (decode.data._id != clientId) next(new UnAuthorizedError())

    //check roles
    if (roles && roles.length) {
      if (!decode.data.roles.some(role => roles.includes(role))) next(new ForbidentError())
    }

    req.user = decode.data
    next()
  }
}

module.exports = authorizes