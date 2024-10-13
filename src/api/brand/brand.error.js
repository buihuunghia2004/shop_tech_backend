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
    image: {
      'any.required': 'V0301-Image is required',
      'string.base': 'V0302-Image must be a string',
    },
    _destroy: {
      'any.required': 'V0501-_destroy is required',
      'boolean.base': 'V0502-_destroy must be a boolean',
    },
    categoryId: {
      'any.required': 'V0601-Category is required',
      'string.base': 'V0601-Invalid must be a string',
    }
  },
  handle: {
   brandNotFound: 'H0001-brand not found',
   brandIsExist: 'H0002-brand name already exist',
   categoryNotFound: 'H0003-category not found',
  },
}
