const { CREATED, OK } = require('../../../core/success.res')
const authManagerService = require('./auth-manager.service')

class AuthManagerController {
  managerRegister = async (req, res, next) => {
    try {
      const registered = await authManagerService.registerManager(req.body)
      new CREATED('manager created successfully', registered).send(res)
    } catch (error) {
      next(error)
    }
  }

  managerLogin = async (req, res, next) => {
    try {
      const login = await authManagerService.loginManager(req.body)
      new OK('manager login successfully', login).send(res)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AuthManagerController()
