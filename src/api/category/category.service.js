const { BadRequestError, NotFoundError } = require("@/core/error.res")
const {handle} = require("./category.error")
const { ObjectId } = require('mongodb');
const categoryModel = require('./category.model');
const { default: slugify } = require("slugify");

const findAll = async (options) => {
  const {isPagination, skip, limit, sorts, only} = options
  
  const query = categoryModel.find()
    .sort(sorts)
    .select(only)

  if (isPagination) {
    query.skip(skip).limit(limit)
  }

  const categories = await query.lean()
  const totalRecord = await categoryModel.countDocuments()  
  return [categories, {limit, skip, totalRecord}]
}

const findById  = async (id) => {
    const category = await categoryModel.findById(id).lean()
    if (!category) throw new NotFoundError('category not found', handle.categoryNotFound)
    return category
}
const createNew = async ({ name },creator) => {  
  //1.check category name already exist
  const isCategoryExist = await categoryModel.exists({name})
  if (isCategoryExist) throw new BadRequestError('manager already exist', handle.categoryIsExist)

  //2.1.slugify
  const slug = slugify(name, { lower: true, locale: 'vi', strict: true })
  //2.2.create new category
  const category = await categoryModel.create({
    name,
    createdBy: new ObjectId(creator),
    updatedBy: new ObjectId(creator),
    slug
  })
  
  //3.return category
  return category._doc
}

const deleteById = async (id) => {
  const category = await categoryModel.findByIdAndDelete(id)
  if (!category) throw new NotFoundError('category not found', handle.categoryNotFound)
  return true
}

const updateById = async (id, {name}, updator) => {
  //handle update
  const category = await categoryModel.findByIdAndUpdate(id, {
    name,
    slug: slugify(name, { lower: true,locale: 'vi', strict: true }),
    updatedBy: new ObjectId(updator)
  }, { new: true }).lean()
  if (!category) throw new NotFoundError('category not found', handle.accountNotExist)  
  return category
}

module.exports = {
  createNew,
  deleteById,
  updateById,
  findById,
  findAll
}