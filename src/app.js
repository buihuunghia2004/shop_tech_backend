const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
require('module-alias/register');

// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//init db
require('./dbs/init.mongo')

//init routes
app.use('/',require('./routes'))

// handling errors
app.use(errorHandler())

module.exports = app
