const { CREATED, OK, OFFSET_PAGINATE } = require('@/core/success.res')
const QueryOptions = require('@/utils/QueryOptions')
const { requestDTO } = require('./brand.dto')
const brandService = require('@/api/brand/brand.service')

const findAll = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)    
    const brands = await brandService.findAll(options)    
    new OFFSET_PAGINATE('brands found successfully', brands).send(res)
  }catch(error){
    next(error)
  }
}

const findById = async (req, res, next) => {
  try {
    const brand = await brandService.findById(req.params.id)
    new OK('brand found successfully', {data:brand}).send(res)
  }catch(error){
    next(error)
  }
}

const createNew = async (req, res, next) => {
  try {
    const created = await brandService.createNew(req.body,req.user._id);
    new CREATED('brand created successfully', {data:created}).send(res)
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  try {
    await brandService.deleteById(req.params.id)
    new OK('brand deleted successfully').send(res)
  }catch(error){
    next(error)
  }
}

const updateById = async (req, res, next) => {
  try {
    const updated = await brandService.updateById(req.params.id, req.body, req.user._id)
    new OK('brand updated successfully', {data:updated}).send(res)
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
}
