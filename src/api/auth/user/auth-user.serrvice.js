const { BadRequestError } = require("../../../core/error.res")
const managerModel = require("../../manager/manager.model")

class AuthUserService {
  static registerManager = async ({ email, password }) => {
    //check the manager already exist by email and username
    const isManagerExist = await managerModel.exists({ $or: [{ email }, { username }] })
    if (isManagerExist) throw new BadRequestError('manager already exist', managerE)
    //create new manager

    //return manager
  }
}

module.exports = new AuthUserService()