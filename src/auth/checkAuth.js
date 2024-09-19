const { StatusCodes } = require("http-status-codes")
const { findById } = require("../services/apikey.service")

const HEADER = {
  API_KEY : 'x-api-key',
  AUTHORIZATION : 'authorization'
}

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString()

    if (!key) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: 'Forbidden Error',
      })
    }

    //check objKey 
    const objKey = await findById(key)
    if (!objKey) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: 'Forbidden Error',
      })
    }

    return next()
  }catch (error) {
    
  }
}

const permissions = (permission) => {
  return (req, res, next) => {
    if (!req.objKey.permissions) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: 'Permission Denied',
      })
    }

    if (!req.objKey.permissions.includes(permission)) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: 'Permission Denied',
      })
    }

    return next()
  }
}

const asyncHandle = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch()
  }
}

module.exports = {
  apiKey,
  permissions
}