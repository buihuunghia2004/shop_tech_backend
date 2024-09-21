const { BadRequestError, NotFoundError } = require("@/core/error.res")
const {handle} = require("./filter.error")
const { ObjectId } = require('mongodb');
const filterModel = require('./filter.model');

const findAll = async (options, filter = {}) => {
  const {isPagination, skip, limit, sorts, only} = options
  const query = filterModel.find(filter)
    .sort(sorts)
    .select(only)

  if (isPagination) {
    query.skip(skip).limit(limit)
  }

  const filters = await query.lean()
  const totalRecord = await filterModel.countDocuments()  
  return [filters, {limit, skip, totalRecord}]
}

const findById  = async (id) => {
    const filter = await filterModel.findById(id).lean()
    if (!filter) throw new NotFoundError('filter not found', handle.filterNotFound)
    return filter
}

const createNew = async ({ name, filterTypeId },creator) => {
  const isFilterExists = await filterModel.exists({name, filterType: new ObjectId(filterTypeId)})
  if (isFilterExists) throw new BadRequestError('filter already exist', handle.filterIsExist)


  const category = await filterModel.create({
    name,
    createdBy: new ObjectId(creator),
    updatedBy: new ObjectId(creator),
    filterType: new ObjectId(filterTypeId),
  })
  
  return category._doc
}

const deleteById = async (id) => {
  const filter = await filterModel.findByIdAndDelete(id)
  if (!filter) throw new NotFoundError('filter not found', handle.filterNotFound)
  return true
}

const updateById = async (id, {name}, updator) => {
  //handle update
  const filter = await filterModel.findByIdAndUpdate(id, {
    name,
    updatedBy: new ObjectId(updator)
  }, { new: true }).lean()
  if (!filter) throw new NotFoundError('filter not found', handle.accountNotExist)  
  return filter
}

module.exports = {
  createNew,
  deleteById,
  updateById,
  findById,
  findAll
}