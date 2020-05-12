const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json')

module.exports = (app) => {
    app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument,{
        explorer:true
    }))
}