const name = 'name'
const slug = 'slug'
const imgUrl = 'imgUrl'
const imgPId = 'imgPId'
const categoryId = 'categoryId'
const createdBy = 'createdBy'
const updatedBy = 'updatedBy'
const _destroy = '_destroy'
const specs = 'specs'
const brand = 'brand'
module.exports = {
  //request
  requestDTO:{
    create:[name, imgUrl, imgPId, categoryId],
    updateById: [name, imgUrl, imgPId, categoryId, _destroy],
    only:[name, slug, imgUrl, imgPId, categoryId, createdBy, updatedBy, specs,brand],
  },

  //response
  responseDTO:{
    create:[],
    update:[],
    findById:[],
  },
}