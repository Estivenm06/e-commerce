import { scheduleActivationDeletion } from '../utilities/helpers.js';
import {User, Active} from '../models/index.js';
import { SECRET } from "../utils/config.js";
import { jwtDecode } from 'jwt-decode';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';

const loginUser = ("/", async (req, res) => {
  const { body } = req;
  try{
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
    
    const {id, username, name} = user;
  
    const password = await bcrypt.compare(body.password, user.passwordHash);
  
    if (!password) {
      return res.status(401).json({ error: "incorrect password" });
    }
  
    const userForToken = {
      id,
      username,
      name,
    };
  
    const token = jwt.sign(userForToken, SECRET, { expiresIn: '1h' });
  
    const isActive = await Active.findOne({where: {userId: id}})
    
    if(isActive){
      const decodedToken = jwtDecode(isActive.dataValues.active)
      const currentTime = Date.now() / 1000
      if(decodedToken.exp < currentTime){
        await isActive.destroy()
      }else{
        return res.status(401).json({error: 'The user is currently active.'})
      }
    }
  
    const active = await Active.create({userId: id, active: token})
    
    if(!active){
      return res.status(401).json({error: 'This user cannot be active.'})
    }

    const expirationTime = 1 * 60 * 60 * 1000
    await scheduleActivationDeletion(active.id, expirationTime);
  
    return res
      .status(200)
      .json({ token, username, name, active: true, id});
  }catch{
    return res.status(500).json({error: 'The request could not be completed.'})
  }
});

export {
  loginUser
}