const { ROLE } = require("./constant")
module.exports = convertRoles = (roles = []) => {
  return roles.map(role => ROLE[role.toUpperCase()])
}