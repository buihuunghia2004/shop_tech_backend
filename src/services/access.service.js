const managerModel = require('../models/manager.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const KeyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../auth/authUtils')
const { BadReqErr } = require('../core/error.res')
class AccessService {
  static signup = async ({ email, password }) => {
    try {
      const holdelManager = managerModel.findOne({ email }).lean()
      if (holdelManager) {
        throw new BadReqErr('Error: manager already exist')
      }

      const passwordHash = await bcrypt.hash(password, 10)
      const newManager = await managerModel.create({
        email,
        password: passwordHash,
      })

      if (newManager) {
        const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: 'pkcs81',
            format: 'pem',
          },
          privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
          },
        })

        const publicKeyString = await KeyTokenService.createKeyToken({ userId: newManager._id, publicKey: publicKey, refreshToken: [] })

        const tokens = await createTokenPair({ managerId: newManager._id }, publicKeyString, privateKey)
        return { success: true, message: 'Manager created', tokens }
      }

      return { success: true, message: 'Manager created', tokens }
    } catch (error) {}
  }
}

module.exports = new AccessService()
