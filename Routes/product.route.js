const express = require("express");
const { productModel } = require("../model/product.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const productRoute = express.Router();

productRoute.get("/:category", async (req, res) => {
      const {category}=req.params
    try {
        const womendata = await productModel.find({category:category});
        res.send(womendata)
    } catch (error) {
        res.send({ "msg": "Erro while getting data" })
    }
});

productRoute.post("/addData", async (req, res) => {
    const {image, title, diss, price,category } = req.body;

    try {
        const app = new productModel({image, title, diss, price,category});
        await app.save();
        res.send(({ "mag": "data created" }));
    } catch (error) {
        res.send({ "msg": "Error while posting women data" })
    }
});

module.exports = {
    productRoute
}