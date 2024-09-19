const bcrypt = require('bcrypt')
const { BadRequestError } = require("@/core/error.res")
const {handle} = require("./manager.err")
const managerModel = require('./manager.model')
const { ObjectId } = require('mongodb');

const createManager = async ({ username, email, password, roles },creator) => {  
  //1.check username and email already exist
  const isManagerExist = await managerModel.exists({ $or: [{ username }, { email }] })
  if (isManagerExist) throw new BadRequestError('manager already exist', handle.accountExist)

  //2.1.hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //2.2.create new manager
  const manager = await managerModel.create({
    username,
    email,
    password: hashedPassword,
    roles,
    createdBy: new ObjectId(creator),
    updatedBy: new ObjectId(creator),
  })
  
  //3.return manager
  return manager._doc
}


module.exports = {
  createManager
}