const login = 'login' //user name or email when login
const username = 'username'
const email = 'email'
const password = 'password'
const roles = 'roles'
const createdBy = 'createdBy'
const updatedBy = 'updatedBy'
const isActive = 'isActive'
const _destroy = '_destroy'

const managerDTO = {
  //request
  loginDTO: [login, password],
  requestDTO:{
    updateById: [username, email, password, roles, _destroy, isActive],
    create:[username, email, password, roles],
    only:[username, email, _destroy, isActive],
  },

  //response
  responseDTO:{
    create:[username, email, createdBy, updatedBy, isActive],
    update:[username, email, createdBy, updatedBy, isActive],
    findById:[username, email, createdBy, updatedBy, isActive],
  },
}

module.exports = managerDTO