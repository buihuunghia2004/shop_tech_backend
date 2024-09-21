const { BadRequestError, NotFoundError } = require("@/core/error.res")
const {handle} = require("./filter-type.error")
const { ObjectId } = require('mongodb');
const filterTypeModel = require('./filter-type.model');
const filterService = require('@api/filter/filter.service');

const findAll = async (options, filter = {}) => {
  const {isPagination, skip, limit, sorts, only} = options
  
  const query = filterTypeModel.find(filter)
    .sort(sorts)
    .select(only)

  if (isPagination) {
    query.skip(skip).limit(limit)
  }

  const filterTypes = await query.lean()
  const totalRecord = await filterTypeModel.countDocuments()  
  return [filterTypes, {limit, skip, totalRecord}]
}

const findFilters = async (id, options) => {
  const filterType = await filterTypeModel.findById(id).lean()
  if (!filterType) throw new NotFoundError('filterType not found', handle.filterTypeNotFound)
  const filters = await filterService.findAll(options, {filterType: filterType._id})
  return filters
}

const findById  = async (id) => {
    const filterType = await filterTypeModel.findById(id).lean()
    if (!filterType) throw new NotFoundError('filterType not found', handle.filterTypeNotFound)
    return filterType
}

const createNew = async ({ name, categoryId },creator) => {
  const isFilterypeExists = await filterTypeModel.exists({name, category: new ObjectId(categoryId)})
  if (isFilterypeExists) throw new BadRequestError('manager already exist', handle.filterTypeIsExist)

  const filterType = await filterTypeModel.create({
    name,
    createdBy: new ObjectId(creator),
    updatedBy: new ObjectId(creator),
    category: new ObjectId(categoryId)
  })
  
  return filterType._doc
}

const deleteById = async (id) => {
  const filterType = await filterTypeModel.findByIdAndDelete(id)
  if (!filterType) throw new NotFoundError('filterType not found', handle.filterTypeNotFound)
  return true
}

const updateById = async (id, {name}, updator) => {
  //handle update
  const filterType = await filterTypeModel.findByIdAndUpdate(id, {
    name,
    updatedBy: new ObjectId(updator)
  }, { new: true }).lean()
  if (!filterType) throw new NotFoundError('filterType not found', handle.accountNotExist)  
  return filterType
}

module.exports = {
  createNew,
  deleteById,
  updateById,
  findById,
  findAll,
  findFilters
}