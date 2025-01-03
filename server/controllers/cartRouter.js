const router = require("express").Router();
const { Cart, User, Active } = require("../models");
const { Op } = require("sequelize");
const { tokenExtractor } = require("../utils/middleware.js");

router.get("/", async (req, res) => {
  try {
    const where = {};
    if (req.query.userId) {
      where.userId = {
        [Op.iLike]: req.query.userId,
      };
    }
    const carts = await Cart.findAll({
      where,
    });
    return res.json(carts);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while fetching carts." });
  }
});

router.post("/", tokenExtractor, async (req, res) => {
  try {
    const { body } = req;
    const user = await User.findByPk(req.decodedToken.id);
    const isActive = await Active.findOne({ where: { userId: user.id } });
    if (!isActive) {
      return res.status(401).json({ error: "This user is not active." });
    }
    const cart = await Cart.create({ ...body, userId: user.id });
    return res.json(cart);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while creating this cart." });
  }
});

router.put("/:id", tokenExtractor, async (req, res) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const isActive = await Active.findOne({ where: { userId: user.id } });
    if (!isActive) {
      return res.status(401).json({ error: "This user is not active." });
    }
    const cart = await Cart.findByPk(req.params.id);
    if (cart.userId !== user.id) {
      return res
        .status(401)
        .json({ error: "Only the creator of this cart can update it." });
    }
    if (!cart) {
      return res
        .status(400)
        .json({ error: `The cart with id ${req.params.id} does not exists.` });
    }
    await cart.destroy();
    return res.json("You have been sucessfully updated this cart.");
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while updating this cart" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const isActive = await Active.findOne({ where: { userId: user.id } });
    if (!isActive) {
      return res.status(401).json({ error: "This user is not active." });
    }
    const cart = await Cart.findByPk(req.params.id);
    if (cart.userId !== user.id) {
      return res
        .status(401)
        .json({ error: "Only the creator of this cart can update it." });
    }
    if (!cart) {
      return res
        .status(400)
        .json({ error: `The cart with id ${req.params.id} does not exists.` });
    }
    await cart.destroy();
    return res.json("You have been sucessfully delete this cart.");
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while deleting this cart" });
  }
});

module.exports = router;
