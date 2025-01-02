const router = require("express").Router();
const { tokenExtractor } = require("../utils/middleware.js");
const { Active, User } = require("../models/index.js");

router.post("/", tokenExtractor, async (req, res) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
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
