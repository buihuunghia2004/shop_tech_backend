const app = require('./src/app')
const {app : {port}} = require('./src/configs/environment')

const server = app.listen(port, () => {
  console.log(`Server on port ${port}`)
})

process.on('SIGINT', () => {
  server.close()
})
