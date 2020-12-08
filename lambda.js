const awsServerlessExpress = require('aws-serverless-express')
const app = require('./server/index.js')
const server = awsServerlessExpress.createServer(app)

exports.productServiceApp = (event, context) => awsServerlessExpress.proxy(server, event, context)