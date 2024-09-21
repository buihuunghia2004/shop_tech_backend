const { BadRequestError, NotFoundError } = require("@/core/error.res")
const {handle} = require("./brand.error")
const { ObjectId } = require('mongodb');
const brandModel = require('./brand.model');
const { default: slugify } = require("slugify");
const categoryModel = require("../category/category.model");
const { omitData } = require("@/utils");

const findAll = async (options,filter = {}) => {
  console.log(filter);
  const {isPagination, skip, limit, sorts, only} = options
  
  const query = brandModel.find(filter)
    .sort(sorts)
    .select(only)

  if (isPagination) {
    query.skip(skip).limit(limit)
  }

  const brands = await query.lean()
  const totalRecord = await brandModel.countDocuments()  
  return [brands, {limit, skip, totalRecord}]
}

const findById  = async (id) => {
    const brand = await brandModel.findById(id).lean()
    if (!brand) throw new NotFoundError('brand not found', handle.brandNotFound)
    return brand
}
const createNew = async ({ name, imgUrl, imgPId, categoryId},creator) => {  
  const isBrandExists = await brandModel.exists({name})
  if (isBrandExists) throw new BadRequestError('brand already exist', handle.brandIsExist)

  //check category is Exists
  const category = await categoryModel.findById(categoryId,{}).lean()
  if (!category) throw new NotFoundError('category not found', handle.categoryNotFound)

  const slug = slugify(name, { lower: true, locale: 'vi', strict: true })
  const brand = await brandModel.create({
    name,
    imgUrl,
    imgPId,
    createdBy: new ObjectId(creator),
    updatedBy: new ObjectId(creator),
    category: category._id,
    slug
  })
  
  return omitData(brand._doc,['__v'])
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