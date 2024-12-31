const { Product } = require("../models");
const router = require("express").Router();
const { API } = require("../utils/config.js");
const axios = require('axios')

router.get("/", async (req, res) => {
    const products = []
    let product;
    await axios.get(`${API}products`).then(({data}) => {
        products.push(data)
    })
    products.map(async (product) => {
        const {id, ...rest} = product[0]
        console.log(rest);
        product = rest
        const productCreated = await Product.create(product)
        console.log(productCreated); 
    })
    res.send("Hello World!");
});

module.exports = router;
