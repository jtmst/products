const db = require("../db/index")

module.exports = {
    getList: function (req, res) {
        let { count, page } = req.query
        db.productListFind(count, page)
            .then(list => {
                res.status(200).send(list)
            })
    },
    getProduct: function (req, res) {
        let { product_id } = req.params
        db.productIdSearch(product_id)
            .then(product => {
                res.status(200).send(product)
            })
    },
    getStyles: function (req, res) {
        let { product_id } = req.params
        db.stylesByProdId(product_id)
            .then(styles => {
                res.status(200).send(styles)
            })
    },
    getRelated: function (req, res) {
        let { product_id } = req.params
        db.relatedByProdId(product_id)
            .then(relatedProds => {
                res.status(200).send(relatedProds)
            })
    }
}