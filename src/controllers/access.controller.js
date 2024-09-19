const ManagerService = require("@/api/manager/manager.service")

class AccessController {
  createManager = async (req, res, next) => {
    try {
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AccessController()
