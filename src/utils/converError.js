const converError = (error='-') => {  
  return {
    code: error.split('-')[0],
    message: error.split('-')[1]
  }
}

module.exports = converError