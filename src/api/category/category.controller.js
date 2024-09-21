const { CREATED, OK, OFFSET_PAGINATE } = require('@/core/success.res')
const QueryOptions = require('@/utils/QueryOptions')
const { requestDTO } = require('./category.dto')
const categoryService = require('@/api/category/category.service')

const findAll = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)    
    const categories = await categoryService.findAll(options)    
    new OFFSET_PAGINATE('categories found successfully', categories).send(res)
  }catch(error){
    next(error)
  }
}

const findById = async (req, res, next) => {
  try {
    const category = await categoryService.findById(req.params.id)
    new OK('category found successfully', {data:category}).send(res)
  }catch(error){
    next(error)
  }
}

const findBrands = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)
    const brands = await categoryService.findBrands(req.params.slug,options)
    new OFFSET_PAGINATE('brands found successfully', brands).send(res)
  }catch(error){
    next(error)
  }
}

const findFilterTypes = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)
    const brands = await categoryService.findFilterTypes(req.params.slug,options)
    new OFFSET_PAGINATE('brands found successfully', brands).send(res)
  }catch(error){
    next(error)
  }
}

const createNew = async (req, res, next) => {
  try {
    const created = await categoryService.createNew(req.body,req.user._id);
    new CREATED('category created successfully', {data:created}).send(res)
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  try {
    await categoryService.deleteById(req.params.id)
    new OK('category deleted successfully').send(res)
  }catch(error){
    next(error)
  }
}

const updateById = async (req, res, next) => {
  try {
    const updated = await categoryService.updateById(req.params.id, req.body, req.user._id)
    new OK('category updated successfully', {data:updated}).send(res)
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
  findBrands,
  findFilterTypes
}
