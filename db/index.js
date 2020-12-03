const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products')


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
        related_Product_id: Number
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



// --------------------- Queries -------------------------
// returns list of all products, defaulting to page 1, with a max return of 5
let productListFind = (count = 5, page = 1) => {
    return Product.find({}).sort({}).limit(count)
}
// returns all product level information for a specific product id
let productIdSearch = (id) => {
    return Product.find({ id: id })
}

let stylesByProdId = (id) => {
    return Style.find({ productId: id })
}

module.exports.productListFind = productListFind;
module.exports.productIdSearch = productIdSearch;
module.exports.stylesByProdId = stylesByProdId;