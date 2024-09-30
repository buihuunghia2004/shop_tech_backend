const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const cors = require('cors')

const {app : {port}} = require('./configs/environment')
const { swaggerDocs } = require('./utils/swagger')
require('module-alias/register');

// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//init db
require('./dbs/init.mongo')

//swagger docs
swaggerDocs(app, port)

//init routes
app.use('/',require('./routes'));

// handling errors
app.use(errorHandler());

module.exports  = app
