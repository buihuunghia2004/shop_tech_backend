const bcrypt = require('bcrypt')
const { BadRequestError, NotFoundError } = require("@/core/error.res")
const {handle} = require("./manager.err")
const managerModel = require('./manager.model')
const { ObjectId } = require('mongodb');
const { pickData, omitData } = require('@/utils');
const {responseDTO} = require('./manager.dto');
const convertRoles = require('@/utils/convertRoles');

const findAll = async (options) => {
  const {isPagination, skip, limit, sorts, only} = options
  console.log(isPagination, skip, limit, sorts, only);
  
  const query = managerModel.find()
    .populate({ path: 'createdBy', select: 'username' })
    .populate({ path: 'updatedBy', select: 'username' })
    .sort(sorts)
    .select(only)

  if (isPagination) {
    query.skip(skip).limit(limit)
  }

  const managers = await query.lean()
  const totalRecord = await managerModel.countDocuments()  
  return [managers, {limit, skip, totalRecord}]
}

const findById  = async (id) => {
  const manager = await managerModel.findById(id)
    .populate({ path: 'createdBy', select: 'username' })
    .populate({ path: 'updatedBy', select: 'username' })
    .lean()
  if (!manager) throw new NotFoundError('manager not found', handle.accountNotExist)
  return omitData(manager, ['password','roles'])
}

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
  return pickData(manager._doc,responseDTO.create)
}

const deleteManagerById = async (id) => {
  const manager = await managerModel.findByIdAndDelete(id)
  if (!manager) throw new NotFoundError('manager not found', handle.accountNotExist)
  return true
}

const updateById = async (id, data, updator) => {
  //handle something before update
  if (data.password){
    const salt = await bcrypt.genSalt(10)
    data.password = await bcrypt.hash(data.password, salt)
  }
  if (data.roles) {
    data.roles = convertRoles(data.roles)
  }
  data.updatedBy = new ObjectId(updator)

  //handle update
  const manager = await managerModel.findByIdAndUpdate(id, data, { new: true }).lean()
  if (!manager) throw new NotFoundError('manager not found', handle.accountNotExist)  
  return pickData(manager,responseDTO.update)
}

module.exports = {
  createManager,
  deleteManagerById,
  updateById,
  findById,
  findAll
}