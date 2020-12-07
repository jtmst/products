const mongoose = require('mongoose');
const config = require('../config.js')
mongoose.connect(config.MONGO_URL)


// --------------------- Main Schema for all collections -------------------------
const productSchema = new mongoose.Schema({
    features: {
        feature_id: Number,
        product_id: Number,
        feature: String,
        value: String
    },
    photos: {
        photo_id: Number,
        thumbnail_url: String,
        url: String
    },
    products: {
        product_id: Number,
        name: String,
        slogan: String,
        description: String,
        category: String,
        default_price: String
    },
    related: {
        current_product_id: Number,
        related_product_id: Number
    },
    skus: {
        id: Number,
        styleId: Number,
        size: String,
        quantity: String
    },
    styles: {
        id: Number,
        productId: Number,
        name: String,
        sale_price: String,
        original_price: String,
        default_style: Number
    }
})

// ---------------init model ------------------------
let Product = mongoose.model('Product', productSchema)
let Style = mongoose.model('Style', productSchema)
let Related = mongoose.model('Related', productSchema)




// --------------------- Queries -------------------------
// returns list of all products, defaulting to page 1, with a max return of 5
let productListFind = (count = 5, page = 1) => {
    return Product.find({}).sort({}).limit(count)
}
// returns all product level information for a specific product id
let productIdSearch = (id) => {
    return Product.aggregate([
        { $match: { id: id } },
        {
            $lookup:
            {
                from: "features",
                localField: "id",
                foreignField: "product_id",
                as: "features"
            }
        },
        {
            $project: {
                "features._id": 0,
                "features.product_id": 0
            }
        }
    ])
}

let stylesByProdId = (id) => {
    return Style.aggregate([
        { $match: { id: id } },
        {
            $lookup:
            {
                from: "photos",
                localField: "id",
                foreignField: " styleId",
                as: "photos"
            }
        },
        {
            $project: {
                "photos._id": 0,
                "photos.id": 0,
                "photos. styleId": 0
            }
        },
        {
            $lookup:
            {
                from: "skus",
                localField: "id",
                foreignField: " styleId",
                as: "skus"
            }
        },
        {
            $project: {
                "skus._id": 0,
                "skus.id": 0,
                "skus. styleId": 0
            }
        }
    ])
}

let relatedByProdId = (id) => {
    return Related.find({ current_product_id: id }).distinct("related_product_id")
}

module.exports.productListFind = productListFind;
module.exports.productIdSearch = productIdSearch;
module.exports.stylesByProdId = stylesByProdId;
module.exports.relatedByProdId = relatedByProdId;