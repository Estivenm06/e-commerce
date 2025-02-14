'use scric';

const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { User, Active } = require("../models/index.cjs");
const bcrypt = require("bcrypt");
const { SECRET } = require("../utils/config.cjs");
const schedule = require('node-schedule')
const {jwtDecode} = require('jwt-decode')

const scheduleActivationDeletion = async (activeId, expirationTime) => {
  try{
    const deletionDate = new Date(Date.now() + expirationTime)
    console.log(`Scheduling deletion of Active ID ${activeId} for ${deletionDate}`);
    const deleteAt = new Date(deletionDate) 
    schedule.scheduleJob(deleteAt, async () => {
      try{
        const deletedCount = await Active.destroy({where: {
          id: activeId
        }});
        if(deletedCount > 0){
          console.log(`Successfully deleted Active ID ${activeId}`);
        }else{
          console.log(`Active ID ${activeId} not found for deletion.`);
        }
      }catch(error){
        console.error(`Error deleting Active ID ${activeId}:`, error);
      }
    })
  }catch(error){
    console.error(`Error scheduling deletion for Active ID ${activeId}: `, error);
  }
}

router.post("/", async (req, res) => {
  try{
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
  
    const token = jwt.sign(userForToken, SECRET, { expiresIn: '1h' });
  
    const isActive = await Active.findOne({where: {userId: user.id}})
    
    if(isActive){
      const decodedToken = jwtDecode(isActive.dataValues.active)
      const currentTime = Date.now() / 1000
      if(decodedToken.exp < currentTime){
        await isActive.destroy()
      }else{
        return res.status(401).json({error: 'The user is currently active.'})
      }
    }
  
    const active = await Active.create({userId: user.id, active: token})
    
    if(!active){
      return res.status(401).json({error: 'This user cannot be active.'})
    }

    const expirationTime = 1 * 60 * 60 * 1000
    await scheduleActivationDeletion(active.id, expirationTime);
  
    return res
      .status(200)
      .json({ token, username: user.username, name: user.name, active: true, id: user.id});
  }catch{
    return res.status(500).json({error: 'The request could not be completed.'})
  }
});

module.exports = router;
