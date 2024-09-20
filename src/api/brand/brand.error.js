
module.exports = {
  validate: {
    name: {
      'any.required': 'V0101-Name is required',
      'string.base': 'V0102-Name must be a string',
    },
    slug: {
      'any.required': 'V0201-slug is required',
      'string.base': 'V0202-slug must be a string',
    },
    imgUrl: {
      'any.required': 'V0301-ImgUrl is required',
      'string.base': 'V0302-ImgUrl must be a string',
    },
    imgPId: {
      'any.required': 'V0401-ImgPId is required',
      'string.base': 'V0402-ImgPId must be a string',
    },
    _destroy: {
      'any.required': 'V0501-_destroy is required',
      'boolean.base': 'V0502-_destroy must be a boolean',
    }
  },
  handle: {
   brandNotFound: 'H0001-brand not found',
   brandIsExist: 'H0002-brand name already exist',
  },
}
