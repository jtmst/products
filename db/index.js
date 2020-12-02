const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');

const products = new mongoose.Schema({
    features: {
        feature_id: Number,
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