const login = 'login' //user name or email when login
const username = 'username'
const email = 'email'
const password = 'password'
const roles = 'roles'
const _destroy = '_destroy'

const managerDTO = {
  createManagerDTO: [username, email, password, roles],
  loginDTO: [login, password],
}

module.exports = managerDTO