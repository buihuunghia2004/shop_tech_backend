const managerService = require("@/api/manager/manager.service")
const { CREATED } = require("@/core/success.res")
const convertRoles = require("@/utils/convertRoles")

const createManager = async (req, res, next) => {
  try {
    req.body.roles = convertRoles(req.body.roles)    
    const created = await managerService.createManager(req.body,req.user._id);
    new CREATED('manager created successfully', created).send(res)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createManager
}
