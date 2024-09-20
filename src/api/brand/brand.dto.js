const name = 'name'
const slug = 'slug'
const createdBy = 'createdBy'
const updatedBy = 'updatedBy'
const _destroy = '_destroy'

module.exports = {
  //request
  requestDTO:{
    create:[name],
    updateById: [name,_destroy],
    only:[name, slug, createdBy, updatedBy],
  },

  //response
  responseDTO:{
    create:[],
    update:[],
    findById:[],
  },
}