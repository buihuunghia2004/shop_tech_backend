const { CREATED, OK, OFFSET_PAGINATE } = require('@/core/success.res')
const QueryOptions = require('@/utils/QueryOptions')
const { requestDTO } = require('./product.dto')
const ProductService = require('@/api/product/product.service')

const findAll = async (req, res, next) => {
  try {
    const options = QueryOptions(req.query,requestDTO.only)    
    const products = await ProductService.findAll(options)    
    new OFFSET_PAGINATE('products found successfully', products).send(res)
  }catch(error){
    next(error)
  }
}

const findById = async (req, res, next) => {
  try {
    const product = await ProductService.findById(req.params.id)
    new OK('product found successfully', {data:product}).send(res)
  }catch(error){
    next(error)
  }
}

const createNew = async (req, res, next) => {
  try {    
    const created = await ProductService.createNew(req.body,req.user._id);
    new CREATED('product created successfully', {data:created}).send(res)
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  try {
    await ProductService.deleteById(req.params.id)
    new OK('product deleted successfully').send(res)
  }catch(error){
    next(error)
  }
}

const updateById = async (req, res, next) => {
  try {
    const updated = await ProductService.updateById(req.params.id, req.body, req.user._id)
    new OK('product updated successfully', {data:updated}).send(res)
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
