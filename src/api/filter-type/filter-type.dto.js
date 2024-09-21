const name = 'name'
const createdBy = 'createdBy'
const updatedBy = 'updatedBy'
const categoryId = 'categoryId'
const _destroy = '_destroy'

module.exports = {
  requestDTO:{
    create:[name, categoryId],
    updateById: [name, categoryId, _destroy],
    only:[name, categoryId, createdBy, updatedBy],
  }
}