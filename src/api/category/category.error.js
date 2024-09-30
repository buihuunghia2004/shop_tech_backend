module.exports = {
  validate: {
    name: {
      'any.required': 'V0101-Name is required',
      'string.base': 'V0102-Name must be a string',
      'string.empty': 'V0103-Name must not be empty',
    },
    slug: {
      'any.required': 'V0201-slug is required',
      'string.empty': 'V0203-slug must not be empty',
    },
    _destroy: {
      'any.required': 'V0301-_destroy is required',
      'boolean.base': 'V0302-_destroy must be a boolean',
    },
    id: {
      'string.pattern.base': 'V0401-Invalid id',
    }
  },
  handle: {
    categoryNotFound: 'H0001- category not found',
    categoryIsExist: 'H0002- category name already exist',
  },
}
