const { NotFoundError, BadRequestError } = require('@/core/error.res')
const { handle } = require('./product.error')
const { ObjectId } = require('mongodb')
const brandModel = require('../brand/brand.model')
const { default: slugify } = require('slugify')
const categoryModel = require('../category/category.model')
const productModel = require('./product.model')
const skuModel = require('../sku/sku.model')
const productAttrStrategy = require('./utils/attributesStrategy')

const findAll = async (options, filter = {}) => {
  const { isPagination, skip, limit, sorts, only } = options
  console.log('filter', filter);
  

  let query
  let totalRecord
  if (filter.filters) {
    query = skuModel.find().populate({ path: 'product', select: 'image' })
    totalRecord = await skuModel.countDocuments()
  } else {
    query = productModel.find()
    totalRecord = await productModel.countDocuments()
  }
  query.where(filter)
  .sort(sorts)
  .select(only)
  .select('-__v')
  if (isPagination) {
    query.skip(skip).limit(limit)
  }
  const products = await query.lean()
  return [products, { limit, skip, totalRecord }]
}

const findById = async (id) => {
  const brand = await productModel.findById(id).lean()
  if (!brand) throw new NotFoundError('brand not found', handle.brandNotFound)
  return brand
}
const createNew = async (props, creator) => {
  const { categoryId, brandId, name, image, description, specs } = props
  //check category and brand
  const category = await categoryModel.findById(categoryId).lean()
  if (!category)
    throw new NotFoundError('category not found', handle.categoryNotFound)
  const brand = await brandModel.findById(brandId).lean()
  if (!brand) throw new NotFoundError('brand not found', handle.brandNotFound)
  const isProductExists = await productModel.exists({ name })
  if (isProductExists)
    throw new BadRequestError('product already exist', handle.productExist)

  let { attributes, skus } = productAttrStrategy[category.slug](
    props.attributes,
    props.skus
  )
  const productData = {
    name,
    slug: slugify(name, { lower: true, locale: 'vi', strict: true }),
    image,
    description,
    specs,
    category: category._id,
    brand: brand._id,
    createdBy: new ObjectId(creator),
    updatedBy: new ObjectId(creator),
  }
  if (attributes) {
    productData.attributes = attributes
  }

  //create product
  const product = await productModel.create(productData)

  //create skus
  skus = props.skus.map((item) => {
    const sku = {
      ...item,
      product: product._id,
      createdBy: new ObjectId(creator),
      updatedBy: new ObjectId(creator),
    }
    if (sku.default) {
      product.defaultSku = { ...item }
    }
    return sku
  })

  await product.save()
  await skuModel.insertMany(skus)
  return { product, skus }
}

const deleteById = async (id) => {
  const brand = await brandModel.findByIdAndDelete(id)
  if (!brand) throw new NotFoundError('brand not found', handle.brandNotFound)
  return true
}

const updateById = async (id, data, updator) => {
  const { name, specs, image, description, brandId } = data
  //check category and brand
  const product = await productModel.findById(id)
  if (!product)
    throw new BadRequestError('product does not exist', handle.productExist)
  const category = await categoryModel.findById(product.category,{}).lean()
  product.specs = specs
  product.name = name
  product.image = image
  product.description = description
  product.brand = new ObjectId(brandId)
  product.updatedBy = updator    

  let { attributes, skus } = productAttrStrategy[category.slug](
    data.attributes,
    data.skus
  )

  product.attributes = attributes  

  skus = skus.map((item) => {
    const sku = {
      ...item,
      updatedBy: new ObjectId(updator),
    }
    sku._id = new ObjectId(item.id)
    delete sku.id
    sku.product = new ObjectId(item.product)
    if (sku.default) {
      product.defaultSku = { ...item }
    }
    return sku
  })

  console.log('skus',skus);
  

  await product.save()
  const skusOperation = skus.map((sku) => {
    const { _id, ...data } = sku    
    return {
      updateOne: {
        filter: { _id: _id },
        update: { $set: data },
      },
    }
  })
  
  //update many skus
  await skuModel.bulkWrite(skusOperation)
  return { product, skus }
}

module.exports = {
  createNew,
  deleteById,
  updateById,
  findById,
  findAll,
}