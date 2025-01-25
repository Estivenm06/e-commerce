'use scric';

const router = require("express").Router();
const { Active, User } = require("../models/index.cjs");
const jwt = require('jsonwebtoken')
const {SECRET} = require('../utils/config.cjs')

router.post("/", async (req, res) => {
  try {
    const authorization = req.get('authorization')
    if(authorization && authorization.toLocaleLowerCase().startsWith('bearer')){
      try{
        req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
      }catch{
        return res.status(400).json({error: 'invalid token'})
      }
    }else{
      return res.status(400).json({error: 'token missing'})
    }
    const user = await User.findByPk(req.decodedToken.id);
    if(!user){
      return res.status(400).json({error: "There's no user"})
    }
    const active = await Active.findOne({ where: { userId: user.id } });
    if (!active) {
      return res.status(400).json({ error: "This user is not active." });
    }
    await active.destroy();
    return res.json("You have been log out successfully.");
  } catch {
    return res
      .status(500)
      .json({ error: "An error occurred while trying to log out." });
  }
});

module.exports = router;
