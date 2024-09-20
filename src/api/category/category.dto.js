const name = 'name'
const slug = 'slug'
const _destroy = '_destroy'
const createdBy = 'createdBy'
const updatedBy = 'updatedBy'

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