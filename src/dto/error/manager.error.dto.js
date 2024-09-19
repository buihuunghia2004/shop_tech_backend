//user already exist
/**
 * message: "Invalid Input"
 * details: [{
 *   property: "password",
 *   code: "V0101",
 *   message: "password must be longer than or equal to 6 characters"
 * }]
 */
const username = 'username'
const email = 'email'
const password = 'password'
const roles = 'roles'

const dto = {
  req:{
    registerManager: [username, password, email],
  },
  res:{

  },
  error:{

  }
}