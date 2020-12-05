const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

router.get('/', controllers.getList)
router.get('/:product_id', controllers.getProduct)
router.get('/:product_id/styles', controllers.getStyles)
router.get('/:product_id/related', controllers.getRelated)

module.exports = router