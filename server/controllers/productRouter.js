const router = require("express").Router();
const { Product } = require("../models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const where = {};
    let limit;
    if (req.query.search) {
      where.category = {
        [Op.iLike]: req.query.search,
      };
    }
    if (req.query.limit) {
      limit = req.query.limit;
    }
    const products = await Product.findAll({
      limit,
      where,
    });
    res.json(products);
  } catch (error) {
    res.json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });
    if (!product) {
      return res
        .status(400)
        .json({ error: "This product is currently unavailable" });
    }
    return res.json(product);
  } catch (error) {
    return res.json(error);
  }
});

router.post('/', async (req, res) => {
  try{
    const body = req.body
    const product = await Product.create(body)
    return res.json(product)
  }catch(error){
    return res.status(400).json(error)
  }
})

router.put('/:id', async (req, res) => {
  try{
    const body = req.body
    const {id, ...product} = await Product.findByPk(req.params.id)
    if(!product){
      return res.status(400).json({error: `The product with id ${req.params.id} does not exists.`})
    }
    product = body
    await product.save()
    res.json(product)
  }catch(error){
    return res.status(400).json({'An error occurred while changing this product': error})
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const product = await Product.findByPk(req.params.id)
    if(!product){
      return res.status(400).json({error: `The product with id ${req.params.id} does not exists.`})
    }
    await product.destroy()
    res.json('This product has been sucessfully deleted.')
  }catch(error){
    return res.status(400).json({'An error occurred while deleting this product': error})
  }
})

module.exports = router;
