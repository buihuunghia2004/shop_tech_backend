const name = 'name'
const filterTypeId = 'filterTypeId'
const filterType = 'filterType'
const createdBy = 'createdBy'
const updatedBy = 'updatedBy'
const _destroy = '_destroy'

module.exports = {
  //request
  requestDTO:{
    create:[name, filterTypeId],
    updateById: [name, filterTypeId, _destroy],
    only:[name, filterType, createdBy, updatedBy],
  },
}