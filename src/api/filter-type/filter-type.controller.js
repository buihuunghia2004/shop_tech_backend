const { CREATED, OK, OFFSET_PAGINATE } = require('@/core/success.res')
const QueryOptions = require('@/utils/QueryOptions')
const { requestDTO } = require('./filter-type.dto')
const filterTypeService = require('@/api/filter-type/filter-type.service')

const findAll = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)    
    const filterTypes = await filterTypeService.findAll(options)    
    new OFFSET_PAGINATE('filterTypes found successfully', filterTypes).send(res)
  }catch(error){
    next(error)
  }
}

const findById = async (req, res, next) => {
  try {
    const filterType = await filterTypeService.findById(req.params.id)
    new OK('filterType found successfully', {data:filterType}).send(res)
  }catch(error){
    next(error)
  }
}

const findFilters = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)
    const filters = await filterTypeService.findFilters(req.params.id,options)
    new OFFSET_PAGINATE('filters found successfully', filters).send(res)
  }catch(error){
    next(error)
  }
}

const createNew = async (req, res, next) => {
  try {
    const created = await filterTypeService.createNew(req.body,req.user._id);
    new CREATED('filterType created successfully', {data:created}).send(res)
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  try {
    await filterTypeService.deleteById(req.params.id)
    new OK('filterType deleted successfully').send(res)
  }catch(error){
    next(error)
  }
}

const updateById = async (req, res, next) => {
  try {
    const updated = await filterTypeService.updateById(req.params.id, req.body, req.user._id)
    new OK('filterType updated successfully', {data:updated}).send(res)
  }catch(error){
    next(error)
  }
}

module.exports = {
  createNew,
  deleteById,
  updateById,
  findById,
  findAll,
  findFilters
}
