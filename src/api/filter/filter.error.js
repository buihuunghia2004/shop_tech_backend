module.exports = {
  validate: {
    name: {
      'any.required': 'V0101-Name is required',
      'string.base': 'V0102-Name must be a string',
    },
    filterTypeId: {
      'any.required': 'V0201-FilterTypeId is required',
      'string.base': 'V0202-FilterTypeId must be a string',
    },
    _destroy: {
      'any.required': 'V0301-_destroy is required',
      'boolean.base': 'V0302-_destroy must be a boolean',
    },
  },
  handle: {
    filterNotFound: 'H0001- filter not found',
    filterIsExist: 'H0002- filter name already exist',
  },
}
