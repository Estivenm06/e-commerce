import { Product } from "../models/index.js";
import { Op } from "sequelize";

const productGet = async (req, res) => {
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

  try {
    const products = await Product.findAll({
      limit,
      where,
    });
    res.json(products);
  } catch (error) {
    res.json(error);
  }
};

const productGetOnlyOne = async (req, res) => {
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
};

const productCreate = async (req, res) => {
  const body = req.body;
  try {
    const product = await Product.create(body);
    return res.json(product);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const productUpdate = async (req, res) => {
  const body = req.body;
  try {
    const { id, ...product } = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(400).json({
        error: `The product with id ${req.params.id} does not exists.`,
      });
    }
    product = body;
    await product.save();
    res.json(product);
  } catch (error) {
    return res
      .status(400)
      .json({ "An error occurred while changing this product": error });
  }
};

const productDelete = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(400).json({
        error: `The product with id ${req.params.id} does not exists.`,
      });
    }
    await product.destroy();
    res.json("This product has been sucessfully deleted.");
  } catch (error) {
    return res
      .status(400)
      .json({ "An error occurred while deleting this product": error });
  }
};

export {
  productGet,
  productGetOnlyOne,
  productCreate,
  productUpdate,
  productDelete,
};
