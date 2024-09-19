const app = require('./src/app')
const {app : {port}} = require('./src/configs/config.db')

const server = app.listen(port, () => {
  console.log(`Server on port ${port}`)
})

process.on('SIGINT', () => {
  server.close()
})
