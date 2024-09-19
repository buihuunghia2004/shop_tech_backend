const managerService = require("@/api/manager/manager.service")
const { CREATED, OK, OFFSET_PAGINATE } = require("@/core/success.res")
const convertRoles = require("@/utils/convertRoles")
const QueryOptions = require("@/utils/QueryOptions")
const {requestDTO} = require("./manager.dto")

const findAll = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)    
    const managers = await managerService.findAll(options)    
    new OFFSET_PAGINATE('managers found successfully', managers).send(res)
  }catch(error){
    next(error)
  }
}

const findById = async (req, res, next) => {
  try {
    const manager = await managerService.findById(req.params.id)
    new OK('manager found successfully', {data:manager}).send(res)
  }catch(error){
    next(error)
  }
}

const createManager = async (req, res, next) => {
  try {
    req.body.roles = convertRoles(req.body.roles)    
    const created = await managerService.createManager(req.body,req.user._id);
    new CREATED('manager created successfully', {data:created}).send(res)
  } catch (error) {
    next(error)
  }
}

const deleteManagerById = async (req, res, next) => {
  try {
    await managerService.deleteManagerById(req.params.id)
    new OK('manager deleted successfully').send(res)
  }catch(error){
    next(error)
  }
}

const updateById = async (req, res, next) => {
  try {
    const updated = await managerService.updateById(req.params.id, req.body, req.user._id)
    new OK('manager updated successfully', {data:updated}).send(res)
  }catch(error){
    next(error)
  }
}

module.exports = {
  createManager,
  deleteManagerById,
  updateById,
  findById,
  findAll
}
