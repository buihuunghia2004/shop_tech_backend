const { BadRequestError, NotFoundError } = require("@/core/error.res")
const {handle} = require("./product.error")
const { ObjectId } = require('mongodb');
const brandModel = require("../brand/brand.model");
const { default: slugify } = require("slugify");
const categoryModel = require("../category/category.model");
const { omitData } = require("@/utils");
const productModel = require("./product.model");
const { default: mongoose } = require("mongoose");

const findAll = async (options,filter = {}) => {
  console.log(filter);
  const {isPagination, skip, limit, sorts, only} = options
  
  const query = productModel.find(filter)
    .sort(sorts)
    .select(only)

  if (isPagination) {
    query.skip(skip).limit(limit)
  }

  const brands = await query.lean()
  const totalRecord = await productModel.countDocuments()
  return [brands, {limit, skip, totalRecord}]
}

const findById  = async (id) => {
    const brand = await productModel.findById(id).lean()
    if (!brand) throw new NotFoundError('brand not found', handle.brandNotFound)
    return brand
}
const createNew = async (props,creator) => {
  const {categoryId, brandId} = props
  const category = await categoryModel.findById(categoryId).lean()
  if (!category) throw new NotFoundError('category not found', handle.categoryNotFound)
  const brand = await brandModel.findById(brandId).lean()
  if (!brand) throw new NotFoundError('brand not found', handle.brandNotFound)  

  const products = props.products.map(product => {
    const filters = product.filters.map(filter => {
      console.log(filter);
      
      const f = new ObjectId(filter)
      return f
    })    
    return {
      ...omitData(product, ['categoryId', 'brandId', 'filters']),
      category: category._id,
      brand: brand._id,
      filters,
      slug: slugify(product.name, { lower: true,locale: 'vi', strict: true }),
      createdBy: new ObjectId(creator),
      updatedBy: new ObjectId(creator)
    }
  })
  const createdProducts = await productModel.Product.insertMany(products)
  return createdProducts
}

const deleteById = async (id) => {
  const brand = await brandModel.findByIdAndDelete(id)
  if (!brand) throw new NotFoundError('brand not found', handle.brandNotFound)
  return true
}

const updateById = async (id, {name}, updator) => {
  //handle update
  const brand = await brandModel.findByIdAndUpdate(id, {
    name,
    slug: slugify(name, { lower: true,locale: 'vi', strict: true }),
    updatedBy: new ObjectId(updator)
  }, { new: true }).lean()
  if (!brand) throw new NotFoundError('brand not found', handle.accountNotExist)  
  return brand
}

module.exports = {
  createNew,
  deleteById,
  updateById,
  findById,
  findAll
}