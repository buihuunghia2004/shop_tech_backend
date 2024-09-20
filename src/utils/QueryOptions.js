const stringToNum = (value, defaultValue) => {
  return Number.parseInt(value)
    ? Number.parseInt(value) < 0
      ? defaultValue
      : Number.parseInt(value)
    : defaultValue
}
const QueryOptions = (
  { isPagination = true, page = 1, limit = 20, sort = 'createdBy-asc',only = [] },
  DTO
) => {

  //handle sort
  let sortsQuery = {}
  const sorts = sort.split(',')
  if (sorts.length == 2 && DTO.includes(sorts[0])) {
    sortsQuery[sorts[0]] = sorts[1] === 'desc' ? -1 : 1
  } else {
    sortsQuery = { createdBy: 1 }
  }  

  //handle only
  let onlyRequest = {}
  only && only.split(',').map(item => {
    if (DTO.includes(item)) {
      onlyRequest[item] = 1
    }
  })  

  console.log('onlyRequest', onlyRequest);
  

  return {
    isPagination: isPagination === 'false' ? false : true,
    limit: stringToNum(limit, 20),
    skip: stringToNum(limit, 20) * (stringToNum(page, 1) - 1),
    sorts: sortsQuery,
    only: onlyRequest
  }
}

module.exports = QueryOptions