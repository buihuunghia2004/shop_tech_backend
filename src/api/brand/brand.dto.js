const name = 'name'
const slug = 'slug'
const image = 'image'
const categoryId = 'categoryId'
const createdBy = 'createdBy'
const updatedBy = 'updatedBy'
const _destroy = '_destroy'

module.exports = {
  //request
  requestDTO:{
    create:[name, image, categoryId],
    updateById: [name, image, categoryId, _destroy],
    only:[name, slug, image, categoryId, createdBy, updatedBy],
  },

  //response
  responseDTO:{
    create:[],
    update:[],
    findById:[],
  },
}