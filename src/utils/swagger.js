const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const {version} = require('../../package.json')
// const log = require('./log')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger API Documentation',
      version
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }, 
        apiKey: {
          type: 'apiKey',
          name: 'x-client-id',
          in: 'header',
        }
      }
    },
    servers: [
      {
        url: 'http://localhost:3303'
      }
    ],
    security: [
      {
        bearerAuth: [],
        apiKey: []
      }
    ]
  },
  // Path to the API docs
  apis: ['./src/docs/swagger/*.js']     
}

const swaggerSpec = swaggerJSDoc(options)
const swaggerDocs = (app, port) => {
  // Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  // docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(specs)
  })
  console.log(`Docs available at http://localhost:${port}/docs`);
}

module.exports = {swaggerSpec, swaggerDocs}