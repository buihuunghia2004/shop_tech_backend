class AccessController {
  signup = async (req, res, next) => {
    next(new Error('ok'))
  }
}

module.exports = new AccessController()
