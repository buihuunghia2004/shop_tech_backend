const ProductQuery = (query) => {
  const result = {}
  if (query.brands) {
    result.brand = { $in: query.brands.split(',') }
  }

  if (query.minmaxprice) {
    query.minmaxprice = query.minmaxprice.split('-')
    result.price = { $gte: Number(query.minmaxprice[0]) || 0, $lte: Number(query.minmaxprice[1]) || 9999999999 }
  }

  if (query.filters) {
    result.filters = { $in: query.filters.split(',') }
  }
    
  return result
}

module.exports = ProductQuery