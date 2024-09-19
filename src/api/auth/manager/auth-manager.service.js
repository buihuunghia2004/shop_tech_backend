const bcrypt = require('bcrypt')
const {generateKeyPairSync} = require('crypto')
const { writeFileSync } = require('fs');

const { BadRequestError } = require("../../../core/error.res")
const {handle} = require("../../manager/manager.err")
const managerModel = require("../../manager/manager.model")

const { generateToken, verifyToken } = require('../../../helpers/jwt')
const { JWT } = require('@/utils/constant')
const keytokenManagerModel = require('./keytoken-manager.model')

class AuthManagerService {
  static registerManager = async ({ username, email, password }) => {
    //check the manager already exist by email and username
    const isManagerExist = await managerModel.exists({ $or: [{ email }, { username }] })
    console.log(isManagerExist);
    if (isManagerExist) throw new BadRequestError('manager already exist', handle.emailExist)
    //create new manager

    //return manager
    return true
  }

  static loginManager = async ({ login, password }) => {

    //1.check the manager already exist by email or username
    const manager = await managerModel.findOne({ $or: [{ email: login }, { username: login }] }, { password: 1, email: 1 }).lean().exec()
    if (!manager) throw new BadRequestError('manager not found', handle.accountNotExist)

    //2.check the password
    const isMatch = await bcrypt.compare(password, manager.password)
    if (!isMatch) throw new BadRequestError('password not match', handle.passwordNotMatch)
    
    //3.generate keys
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
      }
    });
    
    //4.generate tokens
    const accessToken = await generateToken(manager,privateKey, JWT.JWT_ACCESS_LIFE)
    const refreshToken = await generateToken(manager,privateKey, JWT.JWT_REFRESH_LIFE)

    //5.save keys and tokens
    const keyTokens = await keytokenManagerModel.findOne({ manager: manager._id })
    if (keyTokens) {
      keyTokens.refreshTokens.push(refreshToken)
      keyTokens.privateKey = privateKey.toString()
      keyTokens.publicKey = publicKey.toString()
      await keyTokens.save()
    }else{
      const newKeyTokens = new keytokenManagerModel({
        manager: manager._id,
        privateKey: privateKey.toString(),
        publicKey: publicKey.toString(),
        refreshTokens: [refreshToken]
      })
      await newKeyTokens.save()
    }

    //6.return
    return { accessToken, refreshToken }
  }
}

module.exports = AuthManagerService