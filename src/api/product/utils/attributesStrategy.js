const OPTION_INDEX = 0
const COLOR_INDEX = 1

const SmartPhoneAttribute = (data, skusData) => {
  let attributes = {options: [], colors: []}

  const options = data.options.reduce((result, item) => {
    attributes['options'].push(item.option)
    result.push({
      name: item.name,
      filters: item.filters,
    })
    return result
  },[])

  const imagesArr = data.colors.reduce((result, item) => {
    attributes['colors'].push({code: item.code, name: item.name})
    result.push(item.images)
    return result
  },[])

  let skus = []
  if (skusData) {
    skus = skusData.map((item) => {
      item.name = options[item.attrIndex[OPTION_INDEX]].name
      item.filters = options[item.attrIndex[OPTION_INDEX]].filters
      item.images = imagesArr[item.attrIndex[COLOR_INDEX]]
      return item
    })
  }
  return {
    attributes,
    skus,
  }
}

const SmartWatchAttribute = (data) => {
  let attributes = {colors: []}

  const imagesArr = data.colors.reduce((result, item) => {
    attributes['colors'].push({code: item.code, name: item.name})
    result.push(item.images)
    return result
  },[])

  let skus = []
  if (skusData) {
    skus = skusData.map((item) => {
      item.images = imagesArr[item.attrIndex[0]]
      return item
    })
  }
  return {
    attributes,
    skus,
  }
}

const LaptopAttribute = (data) => {
  let attributes = {}

  let skus = []
  if (skusData) {
    skus = skusData.map((item) => {
      item.images = imagesArr[item.attrIndex[COLOR_INDEX]]
      return item
    })
  }
  return {
    attributes,
    skus,
  }
}

const productAttrStrategy = {
  dtdd: SmartPhoneAttribute,
  'dong-ho-thong-minh': SmartWatchAttribute,
  laptop: LaptopAttribute,
}

module.exports = productAttrStrategy
