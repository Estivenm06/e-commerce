import {Active, User} from '../models/index.js';

const logoutUser = (async (req, res) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    if(!user){
      return res.status(400).json({error: "There's no user"})
    }
    const active = await Active.findOne({ where: { userId: user.id } });
    if (!active) {
      return res.status(400).json({ error: "This user is not active." });
    }
    await active.destroy();
    console.log('You have been log out successfully');
    
    return res.json("You have been log out successfully.");
  } catch {
    return res
      .status(500)
      .json({ error: "An error occurred while trying to log out." });
  }
});

export {
  logoutUser
}