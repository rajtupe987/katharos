const mongoose = require("mongoose");

const proSchema = mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    diss: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String }
},{__v:false});


const productModel = mongoose.model("product", proSchema);

module.exports = {
    productModel
}