const _ = require('lodash')

const pickData = (object = {}, fileds = []) => {
  return _.pick(object, fileds)
}

const omitData = (object = {}, fileds = []) => {
  return _.omit(object, fileds)
}

module.exports = {
  pickData,
  omitData
}