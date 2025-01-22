const router = require("express").Router();
const { Cart, User, Active } = require("../models");
const jwt = require('jsonwebtoken')
const {SECRET} =require('../utils/config.js')

router.get("/", async (req, res) => {
  try {
    const carts = await Cart.findAll({where: {userId: req.query.userId}});

    if(carts.length === 0){
      return res.json([])
    }

    return res.json(carts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error has occurred while fetching carts." });
  }
});

router.post("/", async (req, res) => {
  try {
    const authorization = req.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        try{
            req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
        }catch{
            return res.status(401).json({error: 'token invalid'})
        }
    }else{
        return res.status(401).json({error: 'token missing'})
    }
    const { body } = req;
    const user = await User.findByPk(req.decodedToken.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." }); // Handle non-existent user
    }
    const isActive = await Active.findOne({ where: { userId: user.id } });
    if (!isActive) {
      return res.status(401).json({ error: "This user is not active." });
    }
    const newCart = await Cart.create({ ...body, userId: user.id });
    return res.json(newCart);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while creating this cart." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const authorization = req.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        try{
            req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
        }catch{
            return res.status(401).json({error: 'token invalid'})
        }
    }else{
        return res.status(401).json({error: 'token missing'})
    }
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
    const authorization = req.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        try{
            req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
        }catch{
            return res.status(401).json({error: 'token invalid'})
        }
    }else{
        return res.status(401).json({error: 'token missing'})
    }
    const user = await User.findByPk(req.decodedToken.id);
    const isActive = await Active.findOne({ where: { userId: user.id } });
    if (!isActive) {
      return res.status(401).json({ error: "This user is not active." });
    }
    const cart = await Cart.findOne({where: {id: req.params.id}});
    if (cart.userId !== user.id) {
      return res
        .status(401)
        .json({ error: "Only the creator of this cart can delete it." });
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
