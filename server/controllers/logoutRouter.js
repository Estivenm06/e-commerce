const router = require("express").Router();
const { Active, User } = require("../models/index.js");
const jwt = require('jsonwebtoken')
const {SECRET} = require('../utils/config.js')

router.post("/", async (req, res) => {
  try {
    const authorization = req.get('authorization')
    let decodedToken;
    if(authorization && authorization.toLocaleLowerCase().startsWith('bearer')){
      decodedToken = jwt.verify(authorization.substring(7), SECRET)
    }
    const user = await User.findByPk(decodedToken.id);
    const active = await Active.findOne({ where: { userId: user.id } });
    if (!active) {
      return res.status(400).json({ error: "This user is not active." });
    }
    await active.destroy();
    return res.json("You have been log out successfully.");
  } catch {
    return res
      .status(400)
      .json({ error: "An error occurred while trying to log out." });
  }
});

module.exports = router;
