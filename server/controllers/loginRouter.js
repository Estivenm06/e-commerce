const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { User, Active } = require("../models");
const bcrypt = require("bcrypt");
const { SECRET } = require("../utils/config.js");

router.post("/", async (req, res) => {
  const { body } = req;
  const user = await User.findOne({
    where: {
      username: body.username,
    },
  });
  if (!user) {
    return res
      .status(400)
      .json({ error: `The username ${body.username} does not exists.` });
  }

  const password = await bcrypt.compare(body.password, user.passwordHash);

  if (!password) {
    return res.status(401).json({ error: "incorrect password" });
  }

  const userForToken = {
    id: user.id,
    username: user.username,
    name: user.name,
  };

  const token = jwt.sign(userForToken, SECRET, { expiresIn: 60 * 60 });

  const isActive = await Active.findOne({where: {userId: user.id}})
  
  if(isActive){
    return res.status(401).json({error: 'The user is currently active.'})
  }

  const active = await Active.create({userId: user.id, active: true})
  
  if(!active){
    return res.status(401).json({error: 'This user cannot be active.'})
  }

  return res
    .status(201)
    .json({ token, username: user.username, name: user.name, active: true });
});

module.exports = router;
