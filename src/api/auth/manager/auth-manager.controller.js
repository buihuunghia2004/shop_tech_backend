const { CREATED, OK } = require("../../../core/success.res")
const authManagerService = require("./auth-manager.service")

class AuthManagerController {

  managerRegister = async (req, res, next) => {
    const registered = await authManagerService.registerManager(req.body)
    new CREATED('manager created successfully', registered).send(res)
  }

  managerLogin = async (req, res, next) => {
    const login = await authManagerService.loginManager(req.body)
    new OK('manager login successfully', login).send(res)
  }
}

module.exports = new AuthManagerController()