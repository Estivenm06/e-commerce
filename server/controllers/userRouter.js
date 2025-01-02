const router = require("express").Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const { tokenExtractor } = require("../utils/middleware.js");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while fetching users." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { password, ...body } = req.body;
    let user;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    user = body;
    user.passwordHash = hash;
    await User.create(user);
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while creating the user." });
  }
});

router.put("/:id", tokenExtractor, async (req, res) => {
  try {
    const { id, ...body } = req;
    const user = await User.findByPk(req.decodedToken.id);
    if (!user) {
      return res.status(401).json({ error: "User not found it." });
    }
    user = body;
    await user.save();
    return res.json(user);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while updating the user." });
  }
});

router.delete("/:id", tokenExtractor, async (req, res) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    if (!user) {
      return res.status(401).json({ error: "User not found it." });
    }
    await user.destroy();
    return res.json("You have been successfully delete the user.");
  } catch (error) {
    return res
      .status(400)
      .json({ error: "An error has occurred while deleting this cart" });
  }
});

module.exports = router;
