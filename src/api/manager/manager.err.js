/**
 * 1.username
 * 2.email
 * 3.password
 * 4.roles
 */

module.exports = {
  validate: {
    login: {
      'any.required': 'V0001-Login is required',
    },
    username: {
      'any.required': 'V0101-username is required',
    },
    email: {
      'any.required': 'V0201-Email is required',
      'string.email': 'V0202-Email is not valid',
    },
    password: {
      'any.required': 'V0301-Password is required',
      'string.min': 'V0302-Password must be at least 6 characters',
      'string.max': 'V0303-Password must be at most 30 characters',
    },
    roles: {
      'any.required': 'V0401-Roles is required',
      'any.only': 'V0402-Invalid roles',
    },
    _destroy: {
      'any.required': 'V0501-_destroy is required',
    },
  },
  handle: {
    accountNotExist: 'H0001- username or email is wrong',
    accountExist: 'H0002- username or email already exist',
    emailExist: 'H0101-Email already exist',
    passwordNotMatch: 'H0301-Password not match',
  },
}
