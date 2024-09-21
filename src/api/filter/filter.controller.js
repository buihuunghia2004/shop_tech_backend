const { CREATED, OK, OFFSET_PAGINATE } = require('@/core/success.res')
const QueryOptions = require('@/utils/QueryOptions')
const { requestDTO } = require('./filter.dto')
const filterService = require('@/api/filter/filter.service')

const findAll = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)    
    const filters = await filterService.findAll(options)    
    new OFFSET_PAGINATE('filters found successfully', filters).send(res)
  }catch(error){
    next(error)
  }
}

const findById = async (req, res, next) => {
  try {
    const filter = await filterService.findById(req.params.id)
    new OK('filter found successfully', {data:filter}).send(res)
  }catch(error){
    next(error)
  }
}

const findBrands = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)
    const brands = await filterService.findBrands(req.params.slug,options)
    new OFFSET_PAGINATE('brands found successfully', brands).send(res)
  }catch(error){
    next(error)
  }
}

const createNew = async (req, res, next) => {
  try {
    const created = await filterService.createNew(req.body,req.user._id);
    new CREATED('filter created successfully', {data:created}).send(res)
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  try {
    await filterService.deleteById(req.params.id)
    new OK('filter deleted successfully').send(res)
  }catch(error){
    next(error)
  }
}

const updateById = async (req, res, next) => {
  try {
    const updated = await filterService.updateById(req.params.id, req.body, req.user._id)
    new OK('filter updated successfully', {data:updated}).send(res)
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
  findBrands
}
