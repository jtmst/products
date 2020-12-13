const express = require('express')
const bodyParser = require("body-parser")
const morgan = require("morgan")
const router = require("./server/router.js")
const newrelic = require('newrelic');

const serverless = require('serverless-http')
const app = express()


app.use(bodyParser.json())
app.use(morgan('combined'))

app.use('/products', router)

module.exports.handler = serverless(app)