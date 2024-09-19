const jwt = require('jsonwebtoken')

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const accessToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '7d'
    })
    const refreshToken = await jwt.sign(payload, publicKey, {
      algorithm: 'RS256',
      expiresIn: '30d'
    })
    return {
      accessToken,
      refreshToken
    }
  } catch (error) {
    
  }
}

const verifyToken = async (token, publicKey) => {
  try {
    const decoded = await jwt.verify(token, publicKey)
    return decoded
  } catch (error) {
    return null
  }
}

module.exports = {
  createTokenPair,
  verifyToken
}