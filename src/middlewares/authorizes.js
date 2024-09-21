const { UnAuthorizedError, ForbidentError } = require('@/core/error.res')
const keyTokenModel = require('@/api/keyToken/keyToken.model')
const jwt = require('@/helpers/jwt')
const HEADER = {
  AUTHORIZATION: 'authorization',
  CLIENT_ID: 'x-client-id',
}

const authorizes = (roles) => {
  return async (req, res, next) => {
    //check clientId and accessToken from header
    const clientId = req.headers[HEADER.CLIENT_ID]?.toString()
    if (!clientId) next(new UnAuthorizedError('A001-ClientIdNotProvided'))
    const token = req.headers[HEADER.AUTHORIZATION]?.toString().split(' ')[1]
    if (!token) next(new UnAuthorizedError('A002-AccessTokenNotProvided'))

    //find objectKey by clientId
    const objKey = await keyTokenModel.findOne({ user: clientId }).lean()
    if (!objKey) next(new UnAuthorizedError('A003-ClientIdNotValid'))
    try {      
      //decode and check clientId
      const decode = await jwt.verifyToken(token, objKey.privateKey)

      if (decode.data._id != clientId)
        next(new UnAuthorizedError('A004-ClientIdNotValid'))

      //check roles
      if (roles && roles.length) {
        if (!decode.data.roles.some((role) => roles.includes(role)))
          next(new ForbidentError())
      }
      req.user = decode.data
    } catch (error) {
      next(new UnAuthorizedError(error.message))
    }
    next()
  }
}

module.exports = authorizes
