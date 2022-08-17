const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    reference: {
        type: String,
        requred: true
    },
    name: {
        type: String,
        requred: true
    },
    qty: {
        type: Number,
        requred: true
    }
})

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;