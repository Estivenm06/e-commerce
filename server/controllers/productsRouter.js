const router = require("express").Router();
const {Product} = require('../models')

router.get("/", async (req, res) => {
    const products = await Product.findAll({})
    res.json(products);
});

module.exports = router;
