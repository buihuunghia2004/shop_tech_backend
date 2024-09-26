/**
 * 1.username
 * 2.email
 * 3.password
 * 4.roles
 */

module.exports = {
  validate: {
    login: {
      'string.empty': 'V0003-Login must not be empty',
      'any.required': 'V0001-Login is required',
      'string.base': 'V0002-Login must be a string',
    },
    username: {
      'any.required': 'V0101-username is required',
      'string.base': 'V0102-username must be a string',
      'string.empty': 'V0103-username must not be empty',
    },
    email: {
      'any.required': 'V0201-Email is required',
      'string.email': 'V0202-Email is not valid',
      'string.base': 'V0203-Email must be a string',
      'string.empty:': 'V0204-Email must not be empty',
    },
    password: {
      'any.required': 'V0301-Password is required',
      'string.min': 'V0302-Password must be at least 6 characters',
      'string.max': 'V0303-Password must be at most 30 characters',
      'string.base': 'V0304-Password must be a string',
      'string.empty': 'V0305-Password must not be empty',
    },
    roles: {
      'any.required': 'V0401-Roles is required',
      'any.only': 'V0402-Invalid roles',
    },
    _destroy: {
      'any.required': 'V0501-_destroy is required',
      'boolean.base': 'V0502-_destroy must be a boolean',
    },
    isActive: {
      'any.required': 'V0601-IsActive is required',
      'boolean.base': 'V0602-IsActive must be a boolean',
    },
  },
  handle: {
    accountNotExist: 'H0001- account not exist',
    accountExist: 'H0002- account already exist',
    emailExist: 'H0101-Email already exist',
    passwordNotMatch: 'H0301-Password not match',
  },
}
