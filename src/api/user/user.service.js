const { BadRequestError } = require("@/core/error.res")
const userModel = require("./user.model")
const bcrypt = require('bcrypt')
const CodeVerify = require('@/utils/CodeVerify')

const findUserByOrFail = async (filter) => {
  const user = await userModel.findById(filter)
  if (!user) throw new BadRequestError('user not found', handle.accountNotExist)
  return user
}

const register = async ({username, email, password, }) => {
  const userExist = await userModel.findOne({email})
  if(userExist && userExist.isActive) throw new BadRequestError('user already exist', handle.accountExist)

  const salt = bcrypt.genSaltSync(10)
  const passwordHash = bcrypt.hashSync(password, salt)

  if (!userExist.isActive) {
    //update info
    userExist.password = passwordHash
    userExist.username = username
    userExist.save()
  }else{
    await userModel.create({username, email, password: passwordHash})
  }
  //send mail
  return 
}

const verify = async (id, code) => {
  const codeVerify = new CodeVerify()
  const isVerify = codeVerify.verify(id, code)
  if (!isVerify) throw new BadRequestError('invalid code', handle.invalidCode)
  const user = await userModel.findById(id)
  user.isActive = true
  user.save()
  return user
}

const login = async ({ email, password }) => {
  const user = await findUserByOrFail({email})
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new BadRequestError('password not match', handle.passwordNotMatch)

  //generate tokens
  const accessToken = await generateToken(user)
  const refreshToken = await generateToken(user)
  
  return {accessToken, refreshToken,id: user._id}
}

const addToCard = async (userId, cart) => {
  const user = await findUserByOrFail({_id: userId})
  user.cart = cart
  user.save()
}

module.exports = {
  register,
  verify,
  login,
  addToCard
}